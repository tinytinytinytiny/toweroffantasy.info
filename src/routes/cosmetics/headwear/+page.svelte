<script>
    import SvelteMarkdown from "svelte-markdown";
    import hats from "$lib/data/cosmetics/headwear.json";
    import Ad from "$lib/components/Ad.svelte";
</script>

<svelte:head>
    <title>Headwear | Tower of Fantasy Index</title>
    <meta name="description" content="List of cosmetic headwear and how to get them.">
    <meta property="og:title" content="Headwear" />
    <meta
        property="og:description"
        content="List of cosmetic headwear and how to get them."
    />
    <meta
        property="og:image"
        content={`/images/UI/shizhuang/Fashion_icon/${hats[0].imgSrc}.png`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Headwear</h1>

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each hats as hat}
                <tr>
                    <td>
                        <div class="img-and-name">
                            <img
                                src={`/images/UI/shizhuang/Fashion_icon/${hat.imgSrc}.png`}
                                alt={hat.name}
                                width="128"
                                height="128"
                                loading="lazy"
                            />
                            <h2>{hat.name}</h2>
                        </div>
                    </td>
                    <td>
                        <SvelteMarkdown source={hat.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
