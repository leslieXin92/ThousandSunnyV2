import { ref, onMounted, onUnmounted } from 'vue'
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  HemisphereLight,
  TextureLoader,
  SpotLight,
  SpotLightHelper,
  PlaneGeometry,
  MeshLambertMaterial,
  Mesh,
  PCFSoftShadowMap,
  SRGBColorSpace,
  ACESFilmicToneMapping,
  LinearFilter
} from 'three'
import { PLYLoader, OrbitControls } from 'three-stdlib'

const useThree = () => {
  const threeRef = ref()

  const renderer = new WebGLRenderer({ antialias: true })
  const scene = new Scene()
  const camera = new PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100)
  const spotLight = new SpotLight(0xffffff, 100)
  const lightHelper = new SpotLightHelper(spotLight)

  const initThree = () => {
    renderer.setPixelRatio(window.devicePixelRatio)

    const width = threeRef.value?.offsetWidth
    const height = threeRef.value?.offsetHeight || 0

    renderer.setSize(width, height)

    threeRef.value?.appendChild(renderer.domElement)

    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = PCFSoftShadowMap
    renderer.toneMapping = ACESFilmicToneMapping
    renderer.toneMappingExposure = 1
    renderer.setAnimationLoop(render)

    camera.aspect = width / height
    camera.position.set(7, 4, 1)
    camera.updateProjectionMatrix()

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.minDistance = 2
    controls.maxDistance = 10
    controls.maxPolarAngle = Math.PI / 2
    controls.target.set(0, 1, 0)
    controls.update()

    const ambient = new HemisphereLight(0xffffff, 0x8d8d8d, 0.15)
    scene.add(ambient)

    new TextureLoader()
      .setPath('/')
      .loadAsync('disturb.jpg')
      .then(texture => {
        texture.minFilter = LinearFilter
        texture.magFilter = LinearFilter
        texture.colorSpace = SRGBColorSpace
        spotLight.map = texture
      })

    spotLight.position.set(2.5, 5, 2.5)
    spotLight.angle = Math.PI / 6
    spotLight.penumbra = 1
    spotLight.decay = 2
    spotLight.distance = 0
    spotLight.castShadow = true
    spotLight.shadow.mapSize.width = 1024
    spotLight.shadow.mapSize.height = 1024
    spotLight.shadow.camera.near = 1
    spotLight.shadow.camera.far = 10
    spotLight.shadow.focus = 1

    scene.add(spotLight)
    scene.add(lightHelper)

    const geometry = new PlaneGeometry(200, 200)
    const material = new MeshLambertMaterial({ color: 0xbcbcbc })

    const mesh = new Mesh(geometry, material)
    mesh.position.set(0, -1, 0)
    mesh.rotation.x = -Math.PI / 2
    mesh.receiveShadow = true
    scene.add(mesh)

    new PLYLoader().load('/LeslieXin.ply', (geometry) => {
      geometry.scale(0.0024, 0.0024, 0.0024)
      geometry.computeVertexNormals()

      const material = new MeshLambertMaterial()
      const mesh = new Mesh(geometry, material)
      mesh.rotation.y = -Math.PI / 2
      mesh.position.y = 0.8
      mesh.castShadow = true
      mesh.receiveShadow = true
      scene.add(mesh)
    })

    window.addEventListener('resize', onWindowResize)
  }

  const onWindowResize = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  const render = () => {
    const time = performance.now() / 3000
    spotLight.position.x = Math.cos(time) * 2.5
    spotLight.position.z = Math.sin(time) * 2.5
    lightHelper.update()
    renderer.render(scene, camera)
  }

  onMounted(() => {
    threeRef.value && initThree()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onWindowResize)
  })

  return { threeRef }
}

export default useThree
