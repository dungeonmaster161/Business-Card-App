const z = require('zod')

// const createBusinessCard = zod.object({
//     name:zod.string(),
//     description:zod.string(),
//     socialMedia:zod.array(),
//     interest:zod.array()
// })

// const SocialMediaSchema = z.object({
//     handleName: z.string(),
//     handleLink: z.string()
// });

const createBusinessCard = z.object({
    name: z.string(),
    description: z.string(),
    socialMedia: z.array(z.object({
        handleName: z.string(),
        handleLink: z.string()
    })),
    interests: z.array(z.string())
});

module.exports = {
    createBusinessCard : createBusinessCard
}