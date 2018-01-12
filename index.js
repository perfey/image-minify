const path = require("path")
const os = require("os")
const spawn = require("child_process").spawn

const platformNames = {
  darwin: 'mac',
  win32: 'win',
}
const platform = os.platform()
const targetDir = platformNames[platform] || platform
const getBin = (name) => {
  if (platform === 'win32') {
    name = name + '.exe'
  }
  return path.resolve(__dirname, './bin', targetDir, name)
}

const pngquant = getBin('pngquant')
const mozjpeg = getBin('moz-cjpeg')
const cwebp = getBin('cwebp')

exports.pngSpawn = (input, output, options) => {
  options = options || {}
  const { color = 256 } = options
  const spawnArgs = [
      color.toString(),
      input,
      '-o',
      output,
  ]
  return spawn(pngquant, spawnArgs)
}
exports.jpgSpawn = (input, output, options) => {
  options = options || {}
  const { quality = 70 } = options
  const spawnArgs = [
      '-quality',
      quality.toString(),
      '-outfile',
      output,
      input,
  ]
  return spawn(mozjpeg, spawnArgs)
}
exports.webpSpawn = (input, output, options) => {
  options = options || {}
  const { quality = 80 } = options
  const spawnArgs = [
      '-q',
      quality.toString(),
      input,
      '-o',
      output,
  ]
  return spawn(cwebp, spawnArgs)
}
