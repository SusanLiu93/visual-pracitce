
import * as THREE from 'three';
import TrackballControls from 'three-trackballcontrols';
export default {
    data() {
        return {
            scene: null,
            camera: null,
            render: null,
            light: null,
            plane: null,
            control: null
        }
    },
    methods: {
        init() {
            // 初始化场景
            this.scene = new THREE.Scene();
            // 初始化相机
            this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);
            this.camera.position.x = -5;
            this.camera.position.y = 65;
            this.camera.position.z = 60;
            this.camera.lookAt(this.scene.position)
            // 初始化渲染器
            this.render = new THREE.WebGLRenderer()
            // 设置背景颜色
            this.render.setClearColor(0x000000, 1.0);
            this.render.setSize(window.innerWidth, window.innerHeight)
            // this.render.shadowMap.enabled = true;
            // this.render.shadowMap.type = THREE.PCFSoftShadowMap;
            // 将渲染的元素添加到网页中
            document.getElementById(this.id).appendChild(this.render.domElement)
        },
        // 创建灯光
        createLight() {
            this.light = new THREE.SpotLight(0xffffff)
            this.light.position.set(0, 35, 0);
            this.light.castShadow = true;
            this.scene.add(this.light)
        },
        initController() {
            this.control = new TrackballControls(this.camera, this.render.domElement)
            this.control.rotateSpeed = 5
            this.control.zoomSpeed = 1;
            this.control.panSpeed = .8
            this.control.noZoom = false;
            //动态阻尼系数 就是灵敏度
            this.control.dynamicDampingFactor = 0.3;
            this.control.addEventListener('change', this.renderer);
        },
        animation() {
            this.control && this.control.update()
            this.renderer()
            requestAnimationFrame(this.animation)
        },
        renderer() {
            let timer = Date.now() * 0.0001;
            let childrenList = this.scene.children || []
            for (let i = 0; i < childrenList.length; i++) {
                let obj = childrenList[i]
                obj.rotation.x = timer * 5;
                obj.rotation.y = timer * 2.5;
            }
            this.render.render(this.scene, this.camera)
        }
    }
}