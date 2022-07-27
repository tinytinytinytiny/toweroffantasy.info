const huma = {
    name: "Huma",
    uri: "huma",
    imgSrc: "huma.png",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Molten Shield V2",
        element: "flame",
        type: "defense",
        baseStats: ["attack", "defense", "health"],
        shatter: ["A", "10.00"],
        charge: ["A", "10.00"],
        materials: ["flame", "green", "blue"],
        advancement: {
            star1: `Using a Dodge skill or branch skill while in shield form grants a stack of Strong Shield, which grants **10%** damage reduction for **15** seconds and stacks up to **3** times. Switching to axe form converts all Strong Shield stacks to Sharp Axe stacks, each of which increases damage dealt by **15%** for **15** seconds. Switching to a different weapon cancels this effect.`,

            star2: `Increase the current weapon's base HP growth by **16%**.`,

            star3: `While in shield form, branch/dodge attacks deal additional damage to targets equal to **4%** of the user's current HP.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: `After switching to a shield axe, immediately grant **30%** damage reduction that diminishes by **10%** every **3** seconds, down to a minimum of **10%**. Switching weapons cancels this effect. Cooldown: **30** seconds.`,

            star6: `Enhance conversion skills.  
                Shield Enhancement: Increase damage dealt by **60%** and expand the radius of the flame zome by **30%**.  
                Axe Enhancement: For the next **5** seconds after using this ability, turn all damage received into HP (up to a maximum of **15%** of the user's Max HP).`
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x4"],
                    description: `While on the ground, swing the shield axe to attack 4 times in a row.`,
                    breakdown: [
                        `Shield Form: Deal damage equal to **70.6%** of ATK + **4** and knock the target back a short distance.  
                        Axe Form: Deal damage equal to **122.9%** of ATK + **6** and knock the target back a short distance.`,
                        `Shield Form: Deal damage equal to **51.7%** of ATK + **3** and knock the target back a short distance.  
                        Axe Form: Deal damage equal to **72.2%** of ATK + **4** and knock the target back a short distance.`,
                        `Shield Form: Deal damage equal to **57.1%** of ATK + **3** and knock the target back a short distance.  
                        Axe Form: Deal damage equal to **109%** of ATK + **6** and knock the target back a short distance.`,
                        `Shield Form: Deal damage equal to **167.3%** of ATK + **9** and launch the target into the air.  
                        Axe Form: Deal damage equal to **201.1%** of ATK + **11** and knock the target back.`
                    ]
                },
                {
                    name: "Aerial Strike",
                    input: ["Jump","Attack x3"],
                    description: `While airborne or after jumping once, attack 3 times in a row.`,
                    breakdown: [
                        `Shield Form: Deal damage equal to **69%** of ATK + **4**  
                        Axe Form: Deal damage equal to **107.8%** of ATK + **6**.`,
                        `Shield Form: Deal damage equal to **72.9%** of ATK + **4**.  
                        Axe Form: Deal damage equal to **82.8%** of ATK + **4**.`,
                        `Shield Form: Deal damage equal to **93.7%** of ATK + **5**.  
                        Axe Form: Deal damage equal to **252.7%** of ATK + **13**.`
                    ]
                },
                {
                    name: "Anticipation",
                    input:["hold:Attack"],
                    description: 
                        `Shield Form: While on the ground, tap and hold normal attack to enter shield form (release to exit) for **3** seconds, during which the Wanderer is unable to move, and all damage taken is reduced by **50%**. While in shield form, releasing the normal attack button after taking damage or after holding the button for **3** seconds, unleash fire crash, dealing damage equal to **152.1%** of ATK + **8** and inflicting a **1**-second **stun** effect on the target.  
                        &nbsp;  
                        Axe Form: Smash the target, dealing damage equal to **111.1%** of ATK + **6** and knocking the target into the air.`,
                },
                {
                    name: "Valor",
                    input: ["Jump","hold:Attack"],
                    description: 
                        `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Air Branch attacks.  
                        &nbsp;  
                        Shield Form: While falling, deal damage equal to **12.5%** of ATK + **1** each hit. Upon landing, deal damage equal to **81.1%** of ATK + **4** and knock the target into the air.  
                        &nbsp;  
                        Axe Form: While falling, deal damage equal to **12.5%** of ATK + **1** each hit. Upon landing, deal damage equal to **116.6%** of ATK + **6** and knock the target into the air. The higher the location is when triggered, the higher the damage dealt, up to **600%** of ATK.`,
                }
            ],
            dodge: [
                {
                    name: "Erupt",
                    input: ["Dodge","Attack"],
                    description: 
                        `Tap normal attack during the short period after dodging to trigger a Dodge Attack.  
                        &nbsp;  
                        Shield Form: Unleash a flaming shield, dealing damage equal to **50.7%** of ATK + **3** and knocking back targets. In addition, trigger an explosion that deals damage equal to **50.7%** of ATK + **3**, stun targets for **0.5** seconds, and reduce incoming healing effects on targets by **30%** for **10** seconds.  
                        &nbsp;  
                        Axe Form: Swing an axe to deal damage equal to **205.8%** of ATK + **11**, and reduce incoming healing effects on targets by **30%** for **10** seconds.`,
                },
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
                }
            ],
            skill: [
                {
                    name: "Fission",
                    description: 
                        `Shield Conversion: Switch from shield form to axe form and smash the ground, dealing damage equal to **339.9%** of ATK + **18** and knocking the target **into the air**. Leave a flame zone for **5** seconds that burns the target, dealing continuous damage equal to **212.4%** of ATK + **11**.  
                        &nbsp;  
                        Axe Conversion: Switch from axe form to shield form and slam it to the ground, dealing damage equal to **281.4%** of ATK + **15** to the target and knocking them back. Prevent the target from switching weapons for **5** seconds. **45**-second cooldown, Shield Conversion and Axe Conversion share a cooldown.`,
                }
            ],
            discharge: [
                {
                    name: "Seething Rage",
                    description: `When ***weapon charge*** is full or when ***Phantasia*** is triggered, **remove all debuffs from the wielder** and unleash a flame shockwave upon switching to this weapon, dealing damage equal to **320%** of ATK + **17**. Taunt enemies for **5** seconds, during which gain **15%** damage reduction. Scatter shield-shaped objects based on the number of targets taunted. Objects last **20** seconds and provide **10** seconds of **5%** damage reduction (stackable), restoring dodge by 1.`,
                }
            ]
        },
        recommendedMatrix: {
            set2: ["king", "shiro"],
            set4: ["huma"],
            set3: ["sobek", "offensivelogic"]
        }
    },
    
    matrix: {
        set2: `Hitting targets with dodge skills inflicts bleed, dealing damage equal to **15%/19%/22.5%/26%** of ATK every second for **5** seconds.`,

        set4: `Reduce ATK of all targets within 8 meters that are taking damage over time by **10%/12%/13%/15%**.`
    },

    awakening: {
        trait1200: `Each time Huma receives damage, gain **1** Fortitude mark and gain **1** more Fortitude mark if it is flame damage, up to **1** time per **1** second and **12** stacks in total. Upon using a weapon skill, use all Fortitude marks and gain an HP shield equal to the number of marks x **0.4%** HP for **12** seconds. If Fortitude marks are used when the effect is stacked up to the maximum, then gain an HP shield equal to the number of marks x **0.6%** HP.`,

        trait4000: `Each time Huma receives damage, gain **1** Fortitude mark and gain **1** more Fortitude mark if it is flame damage, up to **1** time per **1** second and **12** stacks in total. Upon using a weapon skill, use all Fortitude marks and gain an HP shield equal to the number of marks x **0.6%** HP for **12** seconds. If Fortitude marks are used when the effect is stacked up to the maximum, then gain an HP shield equal to the number of marks x **0.9%** HP.`,

        giftCategories: ['everyday-items', 'games', 'decorations'],

        gifts: [
            [80, "peppaFigure"],
            [60, "catFigure", "tataCards", "ufo", "psp", "pearl", "snowglobe", "princeTataFigure"],
            [30, "chessSet", "diary", "juicePouch", "suit", "perfume", "spiderFigure", "elfFigure"],
            [15, "flowers", "photoAlbum", "scarf", "tradingCard", "plant"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '167 cm',
        birthplace: '???',
        horoscope: 'Capricorn',
        birthday: '12 Jan',
        voiceActors: {
            jp: "高橋李依 (Rie Takahashi)",
            en: "",
            cn: "唐雅菁"
        }
    }
}

export default huma;