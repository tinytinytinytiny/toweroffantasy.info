<script>
    import { page } from "$app/stores";
    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import { onMount } from "svelte";

    // Stores are laggy and update late
    // Can't put this component on each page because it doesn't work inside the grid, must be at root level

    const FALLBACK_SRC = "Activity/ThemeActivity/gulanhuodong/UI_nuanyang_renwu1";

    let img;
    let src;
    let loadingState;
    let animating = false;
    let externalLinkClicked;

    onMount(() => {
        img.addEventListener("animationstart", () => {
            animating = true;
        });
        img.addEventListener("animationend", () => {
            animating = false;
        });
    });

    beforeNavigate(({ from, to }) => {
        if (getImgSrc(from.url.pathname) === getImgSrc(to.url.pathname)) return;

        externalLinkClicked = Boolean(!to.route.id);
        if (externalLinkClicked) return;

        loadingState = "unload";
    });

    afterNavigate(({ from, to }) => {
        const isSameSrc = Boolean(from && getImgSrc(from.url.pathname) === getImgSrc(to.url.pathname));

        if (isSameSrc) return;
        if (externalLinkClicked) loadingState = "unload";

        const newImg = new Image();

        newImg.addEventListener(
            "load",
            () => {
                if (animating) {
                    img.addEventListener("animationend", loadImg, {
                        once: true,
                    });
                } else {
                    loadImg();
                }
            },
            { once: true }
        );

        newImg.onerror = () => {
            src = FALLBACK_SRC;
            loadingState = "load";
        };

        newImg.src = `/images/UI/${getImgSrc($page.url.pathname)}.png`;

        function loadImg() {
            src = newImg.src;
            loadingState = "load";
        }
    });

    function getImgSrc(path) {
        if (path === "/simulacra" || path === "/matrices") return "huanxing/lihui/lan";
        if (path.includes("/lan")) return "huanxing/lihui/lan";
        if (path.includes("/fenrir")) return "huanxing/lihui/fenlier";
        if (path.includes("/umi")) return "huanxing/lihui/wumi";
        if (path.includes("/alyss")) return "huanxing/lihui/Alyss";
        if (path.includes("/annabella")) return "huanxing/lihui/annabeila";
        if (path.includes("/tian-lang")) return "huanxing/lihui/tianlang";
        if (path.includes("/lyra")) return "huanxing/lihui/xinghuan";
        if (path.includes("/lin")) return "huanxing/lihui/linye";
        if (path.includes("/saki-fuwa")) return "huanxing/lihui/bupoxiao";
        if (path.includes("/ruby")) return "huanxing/lihui/leibei";
        if (path.includes("/frigg")) return "huanxing/lihui/fulijia";
        if (path.includes("/nemesis")) return "huanxing/lihui/naimeixisi";
        if (path.includes("/marc")) return "huanxing/lihui/make";
        if (path.includes("/baiyuekui")) return "huanxing/lihui/baiyuekui";
        if (path.includes("/cobalt-b")) return "huanxing/lihui/gulan";
        if (path.includes("/claudia")) return "huanxing/lihui/kelaodiya";
        if (path.includes("/coco-ritter")) return "huanxing/lihui/kekelite";
        if (path.includes("/crow")) return "huanxing/lihui/wuwan";
        if (path.includes("/huma")) return "huanxing/lihui/xiuma";
        if (path.includes("/king")) return "huanxing/lihui/king";
        if (path.includes("/meryl")) return "huanxing/lihui/meilier";
        if (path.includes("/samir")) return "huanxing/lihui/saimier";
        if (path.includes("/shiro")) return "huanxing/lihui/xiluo";
        if (path.includes("/tsubasa")) return "huanxing/lihui/sifengyuanyu";
        if (path.includes("/zero")) return "huanxing/lihui/ling";
        if (path.includes("/bai-ling")) return "huanxing/lihui/bailing";
        if (path.includes("/echo")) return "huanxing/lihui/aige";
        if (path.includes("/ene")) return "huanxing/lihui/xi";
        if (path.includes("/hilda")) return "huanxing/lihui/xierda";
        if (path.includes("/pepper")) return "huanxing/lihui/peipei";
        if (path === "/food") return "Activity/ThemeActivity/huodong_meishi_guo";
        if (path.includes("alternate-destiny")) return "Artifact/itemicon/artifact_ssr_011_icon";
        if (path.includes("chosen-dice")) return "Artifact/itemicon/artifact_ssr_014";
        if (path.includes("colossus-arm")) return "Artifact/itemicon/artifact_ssr_001";
        if (path.includes("confinement")) return "Artifact/itemicon/artifact_ssr_006";
        if (path.includes("couant2")) return "Artifact/itemicon/artifact_ssr_012_icon";
        if (path.includes("drone")) return "Artifact/itemicon/artifact_ssr_008";
        if (path.includes("hologram-projector")) return "Artifact/itemicon/artifact_ssr_010";
        if (path.includes("hoverboard")) return "Artifact/itemicon/artifact_sr_016";
        if (path.includes("omnium-shield")) return "Artifact/itemicon/artifact_ssr_002";
        if (path.includes("spacetime-rift")) return "Artifact/itemicon/artifact_ssr_005";
        if (path.includes("type-v-armor")) return "Artifact/itemicon/artifact_ssr_004";
        if (path.includes("couant")) return "Artifact/itemicon/artifact_sr_012_card";
        if (path.includes("cybernetic-arm")) return "Artifact/itemicon/artifact_sr_011";
        if (path.includes("hovering-cannon")) return "Artifact/itemicon/artifact_sr_001";
        if (path.includes("jetboard")) return "Artifact/itemicon/artifact_sr_006";
        if (path.includes("jetpack")) return "Artifact/itemicon/artifact_sr_004";
        if (path.includes("lava-bomb")) return "Artifact/itemicon/artifact_sr_005";
        if (path.includes("magnetic-pulse")) return "Artifact/itemicon/artifact_r_002";
        if (path.includes("magnetic-storm")) return "Artifact/itemicon/artifact_sr_007";
        if (path.includes("missile-barrage")) return "Artifact/itemicon/artifact_ssr_003";
        if (path.includes("omnium-handcannon")) return "Artifact/itemicon/artifact_sr_008";
        if (path.includes("quantum-cloak")) return "Artifact/itemicon/artifact_sr_009";
        if (path.includes("strange-cube")) return "Artifact/itemicon/artifact_sr_012";
        return FALLBACK_SRC;
    }
</script>

<img
    class="bg-img"
    {src}
    alt=""
    width="1080"
    height="1080"
    loading="lazy"
    data-state={loadingState}
    bind:this={img}
/>

<style lang="scss">
    @keyframes unload {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    @keyframes load {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .bg-img {
        position: fixed;
        z-index: -5;
        right: 0;
        top: 0;
        object-fit: none;
        object-position: 200px;
        opacity: 0;
        width: auto;
        height: auto;

        &[data-state="unload"] {
            animation: unload 0.15s ease-in forwards;
        }

        &[data-state="load"] {
            animation: load 0.3s ease-in forwards;
        }

        &[src*="lan."] {
            object-position: 350px;
        }

        // Food
        &[src*="huodong_meishi"] {
            object-position: 0px;
            top: unset;
            bottom: 0;
        }

        // Ruby sitting
        &[src*="UI_nuanyang_renwu1"] {
            top: unset;
            bottom: 0;
        }
    }
</style>
