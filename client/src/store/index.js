import { proxy } from "valtio";

const state = proxy ({
    intro: true,
    color:'#EFbd48',
    isLogoText: true,
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png',
})

export default state;