import ghUrl from 'github-url-to-object'
import cliPackage from '../../../package.json'
import versionRanges from '../../versionRanges'
import sortObject from 'deep-sort-object'

const manifestPropOrder = [
  'name', 'private', 'version', 'description', 'main', 'author', 'license', 'scripts',
  'keywords', 'dependencies', 'devDependencies'
]

function getCommonManifest(data) {
  const pkg = {
    name: data.name,
    version: '1.0.0',
    description: data.description,
    author: data.author,
    license: data.license,
    devDependencies: {}
  }

  if (pkg.license === 'UNLICENSED') {
    pkg.private = true
  }

  if (data.gitRemote) {
    pkg.repository = {
      type: 'git',
      url: data.gitRemote
    }
  }

  const gh = (data.gitRemote || '').includes('github.com/') && ghUrl(data.gitRemote)
  if (gh) {
    Object.assign(pkg, {
      homepage: `${gh.https_url}#readme`,
      bugs: {url: `${gh.https_url}/issues`}
    })
  }

  return pkg
}

export function createPackageManifest(data) {
  const pkg = Object.assign(getCommonManifest(data), {
    main: 'package.json',
    keywords: ['sanity'],
    scripts: {
      start: 'sanity start',
      test: 'sanity test'
    },
    dependencies: sortObject(
      Object.assign(
        {[cliPackage.name]: `^${cliPackage.version}`},
        versionRanges
      )
    )
  })

  return serializeManifest(pkg)
}

export function createPluginManifest(data) {
  const pkg = Object.assign(getCommonManifest(data), {
    main: 'src/plugin.js',
    scripts: {test: 'echo "Error: no test specified" && exit 1'},
    keywords: ['sanity', 'sanity-plugin'],
    dependencies: {}
  })

  return serializeManifest(pkg)
}

export function createSanityManifest(data, {isPlugin}) {
  const manifest = isPlugin ? {} : {
    plugins: [
      '@sanity/base',
      '@sanity/default-layout'
    ]
  }

  return `${JSON.stringify(manifest, null, 2)}\n`
}

function serializeManifest(src) {
  const props = manifestPropOrder.concat(Object.keys(src))
  const ordered = props.reduce((target, prop) => {
    if (typeof src[prop] !== 'undefined' && typeof target[prop] === 'undefined') {
      target[prop] = src[prop]
    }

    return target
  }, {})

  return `${JSON.stringify(ordered, null, 2)}\n`
}
