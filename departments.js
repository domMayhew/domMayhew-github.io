const departments = [
    {
        title: "Learn",
        categories: [
            {
                title: "Background",
                items: [
                    {
                        title: "Saw-cut vs machine-cut",
                        description: "What are the differences, and what is right for your project?",
                        imgFilePath: "res/images/learn/machine-saw-cut.webp",
                        content:
                            "<p>" +
                                "<img src=\"res/images/learn/machine-saw-cut.webp\" class=\"right top\">" +
                                "Saw cut and machine cut rings are used for high quality chainmail. However, both are more suitable for certain applications. The ring shown on the left is machine cut. The ring on the right is saw cut. Please note: These pictures are several times larger than an actual ring. Flaws that will not be visible to the naked will show under when this zoomed in. The rings shown here are 14g 1/2\"ID. Pinch cut rings are ones which you have cut yourself with a pair of sidecutters." +
                            "</p>" +
                            "<p>" +
                                "<img src=\"res/images/learn/machine-cut.webp\" class=\"right top\">" +
                                "Machine cut rings can be used for all applications except fine jewelry. We make and stock thousands of pounds of machine cut rungs. Machine cut rings are produced by an industrial machine (technically called a shear cut). In the image the ring on the left shows what rings look like once they have been manufactured. The rings you receive will look like this. The ring on the right shows how it will look closed. The angle used to take the photo is not great but it shows the small divot on the outside of the ring at the cut. There is no divot on the inner part of the ring and it closes flush. Rings are stocked in large quantities and are shipped immediately. We ship hundreds of pounds of rings every day. It is almost impossible for a person to hand cut enough rings for a hauberk in one day! The cut is similar to shear cut. It is noticeably better than pinch cut and it does not catch in hair as easily. For items of clothing this is very important. These cost less than saw cut rings, allowing you to experiment more with your designs. These are also easier to close than pinch cut and saw cut rings." +
                            "</p>" +
                            "<p>" +
                                "<img src=\"res/images/learn/saw-cut.webp\" class=\"right top\">" +
                                "For applications where the finished appearance of each ring is important, saw cut rings are the best choice. An example of this is fine jewelry. Saw cut rings are produced by an industrial machine that uses a rotary saw blade to cut a coil. In the image the ring on the left shows what final rings look like. All our saw cut rings are deburred, polished and cleaned. This is how you will receive them. Note please: There is a gap between the ends of the wire. This is called the kerf and it is the width of the saw blade. Because of this gap saw cuts are more difficult to close compared to machine cut rings. The ring on the right shows how it will look closed. A saw cut ring can appear almost seamless when it is well done and finished with attention to detail. If the kerf is closed poorly and without attention to detail, it will make the saw cut ring look sloppy. It will also allow other rings to come loose from the completed piece." +
                            "</p>"
                    }, {
                        title: "How to read ring sizes",
                        description: "What is \"16g\"? What is aspect ratio? What size do I need for my project?",
                        imgFilePath: "res/images/learn/wiregauge.webp",
                        content:
                            "<p>The chart below can be printed life size for quick ring size reference. Follow instructions below to make sure it prints life size. This chart shows data for each ring from both wire gauge systems (SWG and AWG), decimal inches, fractions and metric. It also shows the aspect ratio (AR) of the ring. Here's the catch: any actual ring will be slightly larger due to springback. Harder materials like stainless steel will be more noticably larger than softer materials. Please always look at the actual ID, wire size and AR listed for each ring in the catalog - instructions for how to find this data are below. This is especially important if you are trying to make a weave that is very dependant on aspect ratio. Eg. A tight weave.</p>" +
                            "<img src=\"res/images/learn/wiregauge.webp\">"
                    }, {
                        title: "Getting the right tools",
                        description: "You've learned the hard way that standard hardware store pliers aren't very good for chainmail, but there are lots of chainmail pliers to choose from...",
                        imgFilePath: "res/images/learn/selecting-pliers.webp",
                        content:
                            "<p>Coming soon! In the meantime, have a look at the \"Saw-cut vs machine-cut\" and \"How to read ring sizes\" posts.</p>"
                    }
                ]
            }, {
                title: "Weaves",
                items: [
                    {
                        title: "Euorpean 4-in-1",
                        description: "A basic weave used in everything from armour to jewelry to knicknacks. A good place to get started.",
                        imgFilePath: "res/images/learn/4in1.jpg",
                        imgCitation: "chainmail101.com",
                        content: "<p>Coming soon! In the meantime, have a look at the \"Saw-cut vs machine-cut\" and \"How to read ring sizes\" posts.</p>"
                    }, {
                        title: "Dragonscale",
                        description: "A tight, tricky weave that produces a beautiful, cloth-like result!",
                        imgFilePath: "res/images/learn/dragonscale.jpg",
                        imgCitation: "chainmail101.com",
                        content: "<p>Coming soon! In the meantime, have a look at the \"Saw-cut vs machine-cut\" and \"How to read ring sizes\" posts.</p>"
                    }
                ]
            }, {
                title: "Projects",
                items: [
                    {
                        title: "Chainmail shirt",
                        description: "A fantastic first project <em>if</em> you are willing to commit a lot of hours to it.",
                        imgFilePath: "res/images/learn/shirt.jpg",
                        imgCitation: "amazon.com",
                        content: "<p>Coming soon! In the meantime, have a look at the \"Saw-cut vs machine-cut\" and \"How to read ring sizes\" posts.</p>"
                    }, {
                        title: "Neck Tie",
                        description: "A project for you micromaillers out there: use dragonscale to create a classy neck tie for your next formal occasion.",
                        imgFilePath: "res/images/learn/neck-tie.jpg",
                        imgCitation: "pinterest.com",
                        content: "<p>Coming soon! In the meantime, have a look at the \"Saw-cut vs machine-cut\" and \"How to read ring sizes\" posts.</p>"
                    }, {
                        title: "Bracelet",
                        description: "A step-by-step guide on how to make a simple piece of jewelry.",
                        imgFilePath: "res/images/learn/bracelet.jpg",
                        imgCitation: "beadinggem.com",
                        content: "<p>Coming soon! In the meantime, have a look at the \"Saw-cut vs machine-cut\" and \"How to read ring sizes\" posts.</p>"
                    }
                ]
            }
        ]
    }, {
        title: "Shop",
        categories: [
            {
                title: "Rings",
                items: [
                    {
                        title: "Anodized Aluminum",
                        description: "Saw-cut, bright/matte, 10-20g, $0.28+",
                        imgFilePath: "res/images/products/ano-alumn.jpg"
                    }, {
                        title: "Stainless Steel",
                        description: "Machine- and saw-cut, 12-24g, $4.18+",
                        imgFilePath: "res/images/products/stainless.jpg"
                    }, {
                        title: "Brass",
                        description: "Machine- and saw-cut, 14-20g, $8.44+",
                        imgFilePath: "res/images/products/brass.jpg"
                    }, {
                        title: "Copper",
                        description: "Machine- and saw-cut, 14-20g, $6.01+",
                        imgFilePath: "res/images/products/copper.jpg"
                    }, {
                        title: "Bronze",
                        description: "Machine- and saw-cut, 12-24g, $4.18+",
                        imgFilePath: "res/images/products/bronze.jpg"
                    }, {
                        title: "Bright Aluminum",
                        description: "Machine- and saw-cut, 12-24g, $4.18+",
                        imgFilePath: "res/images/products/bright-alum.jpg"
                    }, {
                        title: "Titanium",
                        description: "Machine- and saw-cut, 14-20g, $8.44+",
                        imgFilePath: "res/images/products/titanium.jpg"
                    }, {
                        title: "Niobium",
                        description: "Saw-cut, bright/matte, 10-20g, $0.28+",
                        imgFilePath: "res/images/products/niobium.jpg"
                    }, {
                        title: "Rubber",
                        description: "16-18g, $7.85+",
                        imgFilePath: "res/images/products/rubber.jpg"
                    }, {
                        title: "Silver",
                        description: "Machine- and saw-cut, 12-22g, $8.13+",
                        imgFilePath: "res/images/products/silver.jpg"
                    }
                ]
            }, {
                title: "Tools",
                items: [
                    {
                        title: "Bent Nose with Ergo. Handle",
                        description: "Price: $10.10<br/>No teeth, light spring, lap joint.",
                        imgFilePath: "res/images/products/bent-nose-with-ergo-handle.jpg"
                    }, {
                        title: "Chisel Nose Plier",
                        description: "Price: $30.82<br/>Wide nose meets chain nose: the 45 deg angled tip allows more surface area on the rings.",
                        imgFilePath: "res/images/products/chisel-nose-plier.jpg"
                    }, {
                        title: "Ergonomic Linesmans Plier",
                        description: "Price: $8.00<br/>120mm long. Teeth, spring, lap joint.",
                        imgFilePath: "res/images/products/ergonomic-linesmans-plier.jpg"
                    }, {
                        title: "Knipex Flatnose Plier",
                        description: "Price: $34.84<br/>125mm long. Fine teeth, no spring, lap joint.",
                        imgFilePath: "res/images/products/knipex-flatnose-plier.jpg"
                    }, {
                        title: "Knipex Flatnose Plier Long",
                        description: "Price: $37.23<br/>160mm long. Fine teeth, no spring, lap joint.",
                        imgFilePath: "res/images/products/knipex-flatnose-plier-long.jpg"
                    }, {
                        title: "Xuron Chainmaille Pliers Tool Kit",
                        description: "Price: $78.02<br/>Three Essential Xuron brand pliers for chainmaille work: Short nose, Flat nose, 90 degree bent nose.",
                        imgFilePath: "res/images/products/xuron-chainmaille-pliers-tool-kit.jpg"
                    }
                ]
            }, {
                title: "Wire",
                items: [
                    {
                        title: "Anodized Aluminum",
                        description: "16g - 18g, 30ft rolls. $8.16+",
                        imgFilePath: "res/images/products/ano-alumn-wire.jpg"
                    }, {
                        title: "Brass",
                        description: "Jewelers and Yellow brass wire, 50-100'. $7.05+",
                        imgFilePath: "res/images/products/brass-wire.jpg"
                    }, {
                        title: "Bright Aluminum",
                        description: "50-100'. $7.14+",
                        imgFilePath: "res/images/products/bright-alum-wire.jpg"
                    }
                ]
            }
        ]
    }, {
        title: "Collaborate",
        categories: [
            {
                title: "Photos",
                items: [
                    {
                        title: "Armour",
                        description: "Post, view, and celebrate photos of chainmail armour. Get inspired for your next shirt, hauberk, gauntlets, or coif!",
                        imgFilePath: "res/images/learn/4in1.jpg"
                    },{
                        title: "Jewelry",
                        description: "Post, view, and celebrate photos of chainmail jewelry. Show other maillers the bracelet, necklace, or earrings you made!",
                    },{
                        title: "Scales",
                        description: "Post, view, and celebrate photos of scalemale. Want to connect with other scalemailers? Show them something you're working on, or check out one of their projects!",
                    },{
                        title: "Knick-knacks",
                        description: "Have you made something unique? A keychain, a hackysack, or something no one has ever seen before? Show us!",
                    },{
                        title: "Miscellaneous",
                        description: "Got a photo that doesn't quite fit in? Good news! We love misfits.",
                    }
                ]
            }, {
                title: "Help",
                items: [
                    {
                        title: "Beginner Advice",
                        description: "Having trouble knowing where to start? Want to reach out to someone who's been doing it a while? Here's your chance to find a guide."
                    },{
                        title: "Tools and Materials",
                        description: "Get help choosing the right tools and materials. Want more detail on one of the products we offer? Post a question here. Chances are, you'll speak directly to a staff member. If not, someone form the community who has used the product will likely reach out."
                    },{
                        title: "Advanced Weaves",
                        description: "This is the place for those of you that love getting technical. If you need help with a weave, or you've got an idea for a new weave, or just want to share an interesting weave you saw, show us here!"
                    }
                ]
            }, {
                title: "Services",
                items: [
                    {
                        title: "List a service",
                        description: "Let others know you're for hire!"
                    },{
                        title: "Request a service",
                        description: "Find someone to make you dream chainmail trinket."
                    }
                ]
            }, {
                title: "Events",
                items: [
                    {
                        title: "Event Planning",
                        description: "From LARPing to weaving groups, here's your chance to find your clan IRL."
                    },{
                        title: "Event Photos",
                        description: "Share your recent gathering to inspire others!"
                    }
                ]
            }
        ]
    }
]