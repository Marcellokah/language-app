const expressions = [
    {
        id: 1,
        serbian: 'srećan',
        english: 'happy',
        image: 'https://s3-alpha-sig.figma.com/img/2983/484c/02f1f51da2aaae1b0f190e4b632adfa8?Expires=1670198400&Signature=ZDGq9QPiOpFxrc99s9XhWz5OxnGnCc~b1RCX7ZbBTr9XyFp-~72wz9JgFXehHOKDZc0xU2ZjQQLgdjhkVQoJgjS9Nalqpp44cPjOvDs33~ageF7NlUiJqvi1Rt-78LxwAzKKjQ1P-GTAIZ0VCKFS1CIUTP1LNiD2cXyWo1-aZfPamnhkySTpmr4vikB180BK0Df3oEIvZGcZkw~MZs8gxS2wjCXt-TK9XbRiy8BIbdiYx7WdUjZtxbyqxfl7gw3PumAwdMTRyX1h3SzMqMr8Y407jYU42uLg4X6j4l8djWo4gYo1rr27pY5aUyCNA4BWkYNDSmoy32wvmEZo3gS6Ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        id: 2,
        serbian: 'lijepo',
        english: 'nice',
        image: 'https://s3-alpha-sig.figma.com/img/63bc/75b3/8447a61b88ed25bd53aa7c14faeb3d2e?Expires=1670198400&Signature=GVW8RyUWXBIiVz8e19fZHWRSnMkNORtFf~euR4moywYAfLzH1B8mN2H5spTWtQNKYt-TI3eKlJVsqTqtC52cJ68MjrslpJUvfhzTW7mM8Nw6ptMSpJ6gA6yOeCPMIjqZDKpQsCIes9i0OBXIdkB9GO1e3qGNg3-5T7gmYPTJC~sQuFUF7lZcHIVPbKuVrZ4eJmoIzKAv0WATm4eZ~Z0kj1vaN-~B4UIJsBClAhG~OnHwpRNIt8BO5AiHpi2PCsDD6mWPGaMibRqPCh~wcztVmMbQXcMGGIhwT-qh4ka37qIV3sIl~7tyTKn6bIBcChTWwWYwPfb87xm9Yuv4IdQyRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        id: 3,
        serbian: 'prijatelju',
        english: 'friend',
        image: 'https://s3-alpha-sig.figma.com/img/df74/0864/b039d5e3bc983722eb3c24062883dba7?Expires=1670198400&Signature=EkNCCvhEITFWiA8D9fbCIudgh6JTsuBDYQwzmvEwnY049pY~HGyt4H2NLE3bkK1Lg1Py6inhjI1Xi0DdmornIWQmxbbo6SFzmCeuSBqUtYq16EPv75gjWqed8UoBWLsFeUSceCw3bhKmg63xovNOwygJe~J5ZrEZAY~Boj9YlTyGTvokrX53h3KQIeAYIxjmi4PxW5MK0TomEtgHfPFn~y4~GAw5vZedGv~NbLAVo-hqq~eG761nQzpe2dbMyJulZMLtjZPcqKSlif8KpTrwq-SEXOBx88J9ShjaKq6YJcsOTkFUZRKc8uXfFS4cz5dOxtihfbDrsBM7yQebaodCjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        id: 4,
        serbian: 'eksplozija',
        english: 'explosion',
        image: 'https://s3-alpha-sig.figma.com/img/25cb/0b30/9e70d171faf4dd65df375f6965a014e8?Expires=1670198400&Signature=DqhhSSWXK0SRjtY5v-3DFT6qjhYLs6Qj1LWernUnpLoprP~ILAGfZwUs9CyiqIGlz~0h~dITUxPWuKA8vb30pzNPf1TGjEPtZfB7fsRyp4Ir~BSh1pqPQ5iNnWkby3vb~nlcoCPFjZ5YOTk0dAt7hMSKPN8fM-4x2hHQn0R2p7LXNYF4hR7xVfLRTOayIEHhn1tBsvU~2QTVTzeywhMATE2cPM1Qk33NpsI3CoJYFX-QCyx~wGJcLTjXttojhjN8qZvwNlUlXojJJq7m7iK4Z7wB7le61ari6RqzRUeL9Xvugvxb0N32469Hu82lJUMZMHQY9r9Tuh-MBVKR5nGUDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        id: 5,
        serbian: 'šargarepa',
        english: 'carrot',
        image: 'https://s3-alpha-sig.figma.com/img/c09f/748d/268d99ea6c0977fbecd771db9f691c3e?Expires=1670198400&Signature=fwgpVn2fcTdLCJk3CWQoySJTGrma27N~FZYVDU5~ilk6TbabYN7-z5ITOWcEpp4G8U6tT9-Twr2KlpctJHHDlLWTNvX3SaAEFbarb8i-stJ34zbwc9uHbquDJJ15l~g0oV7jHuismXW~PceN0e6qdVf3O8FNn3srL6YtoDnyLZgcJXZJpLS5Z~Z6VO-Mj~5PuYd63tK-rkCwP0nWI71fdQl4i7Ali~jPBJrBJFGGG1cXg-0q6NmN2Hh7qQ0RO3Ca7JHWdkX0lrIn4vsnyPQKOToNuwTTig-QHxuYXBiigWditEpH5nKVWEhx6MAptsmzXd8EeJ33wvubvN4BJcNgZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        id: 6,
        serbian: 'auto',
        english: 'car',
        image: 'https://s3-alpha-sig.figma.com/img/8e18/9198/b596ec8aaf473f1bb3851e23f55a92f0?Expires=1670198400&Signature=fFKmkiE3ilwb-hNaIQiqWldo7YMz2NeqqcGLioa9tMltvgJ6JgWDLgz2uocKH4cG~k5rlpF84ybhiBuvwqizdGcAkzHezxuwxH-o6xcbaL9yLZHcbvVgVuKYAfDn9vfT3V26AAbLyuFrT8wDsvt4DfJNJNYtHpvQpCjQNn29rjDz2Kr~cPuHEVyyYFh6CjzjFjMGD-0Ubvn~BcpH~6x883eiMZnbmEvFmLUusvMSEKxwp6q41NNoqjxf3t0rhLLcZPUJe97kGMNc3zOzzp4nyc9b63g62IiEZd6TX8dOIkMYkaCybBMiasEZy5pIeRLn4Z8cMmoB-ylid1OYhkjjPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        id: 7,
        serbian: 'vojnik',
        english: 'soldier',
        image: 'https://s3-alpha-sig.figma.com/img/e6c4/e378/dda598c32858068ec7cebc8c26f9df6c?Expires=1670198400&Signature=LQXpKDQx5txIbM5KorIrmPcxJGEjo6MJYAiQw7rfQoWV-zDcqbjMMqpvqTJK55ZVGoVcz1BdqLi-fg8Y26Q2KH0ucUAFmg9TKbE7JOnHTJwaKDOJ~c~rz8YigHAHqtnEd-FEOCb4d1wbtUrx7YQ51I9nJ4217rugJM6DXbSNyPcLv2o~T~3ubM2gH6re3RD51rfBQzm05N~r-SD6GqKQSn03NHHgVDRuDCnpzQxMsTN7v0yWWq~Zh~YXqYwQ5HAlqTA~mbBd3MNF4aVwjKUpuNjMBb-7a8nldx93N9vMgmWK5lA9jXjgZm4FAGFB27IAZwYcozkL~fgInhAsxD6O~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        id: 8,
        serbian: 'strah',
        english: 'fear',
        image: 'https://s3-alpha-sig.figma.com/img/423f/b29d/f9abc1016fe45822c7a14f624eafd6c2?Expires=1670198400&Signature=MroICRwiUamB6U5f05Rgi9DZP2O3p-KnjSCJJo4JaXQJ4gKi4t7P85iSuWb3t03D8ZjCCosyALTyw1LUDwJvfm-f6hXM-2NrB-GvlOn5ZsVyy5X4vVuAjhtIecvgJIb-RzuE9IVFV3wtWj-JHqMaThyJFm2KMTOhcp5yK5DVhKiRTV3PWi3koe5WrySHn5hGUWlBn~KuD~Kci4OywiKgk~-638CY4uHWNQ7H2ONCsoodyl8NDUfbHMg8NxHnPptXmfHF7sXFoJelPYfovQEkntC8WPsjCILg2Ih8rJflA2cT-m4731NjpMnMaqeWM-605NMjLOpRUk2YNEtxSx82uw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        id: 9,
        serbian: 'relativnost',
        english: 'relativity',
        image: 'https://s3-alpha-sig.figma.com/img/a617/2683/e30b1f7879b08f994fbcda8a22d172f4?Expires=1670198400&Signature=THIYFjRV9aPiNPm81txyhuuINBPPwTiJb2p7wi61BRpcNhyZS4-mUdmmjOoR9qDSZU-V7eUP-AKM8EGvwfFCGR~urdUYePeFVl8dqg06ykltqvwD5k3uwj0H0nPgIryeacUH-bApGKeuBRSXSFpyKOvedChtc1V74gCMUU-Lpwcyy2a6wcSRzIqH67wXfAiegrhKFRZS-8LZdrkApPH5L5IMJ7GT2U-no-zvpd9R~kY9-SNuag-Enhxfto33QZp0xypblpN1Eb3jd~JrEmcSwOwp2knQc3BEKkYM4GTcNtskoQX8NXeaXBF7FAfUJmtZ9Jj2JAqZDJ0mmgWQN76cAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        id: 10,
        serbian: 'knjiga',
        english: 'book',
        image: 'https://s3-alpha-sig.figma.com/img/635e/24c0/f44761170f05f7b8cec0c164ffe3f7ab?Expires=1670198400&Signature=RviwMCOKcOrIQpk09l66A7DI8SqVRHitT76m97Fa~NGNT68FqBQm1eyA~VSG3JaMNA49Xg2~2QJ~1sGfRRYX~eSCBhc5yGtNv4As27A354N3CS5xwDPG5PTmHbQ9T6lwzIbZz0xhKRPhUJ7KpikW5k3SxhwSsEiqHzX8SL86yCeowNbBsiyUJ3k4WK3LHhhqCdXneGIIqtuGS73SC1yVeMROIujlqdpZjceHvZ8ye-fOQmKrqsrVgd75LmqEFCAq-QaXw7cHt81O6F2Tyd8OUGhaf-pDehFXdp3008F3EO7c4AyA6TQxAMDbAAdl3kIw6EUPiTY8xQMym8YtkFzhLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        id: 11,
        serbian: 'Zemlja',
        english: 'Earth',
        image: 'https://s3-alpha-sig.figma.com/img/9b88/f050/d77f5b07ac36cc4e4d17fb5f31806f2c?Expires=1670198400&Signature=TSeOoZJYyaDWj9MQzR9MNT40Qyg5BgBNm6CFNaUVE-peyPVIXwZTPYY1YSnyW7UVeYR7HJSAWRBq--nh7i4lf1uGR1r~c729rgyY31tvVV7HME94Ue5ldFDKm12Mn64czY2SvCKmrJjJdKQAUxS0S2OVULkV1KFB1W~w7PInarN0iaLFY9NWlrsEtjiu1xPaIgvWBFEr22rhUZfr7QZ0D1NBZWArcyyIAwjSg4v14-JpJjIbQzuQG2MJIahK5FOHDGo~~T39nZfL72E3SG6DUcHii30TRzibeULyYdStqX9R~uJ0dxt5JBWW-~Jqc4ay7LaqrMRyvJpgr~iAECaq7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        id: 12,
        serbian: 'ograničenje brzine',
        english: 'speed limit',
        image: 'https://s3-alpha-sig.figma.com/img/abad/8b66/af5c7ba0826d7cceb5d5b6782349fa7c?Expires=1670198400&Signature=APTKkSMSjHneiV~bh9xTPhiTwhR8G9hNU6fQ41jHCPOUD0cr3mLgSrLO0KEpvuWgYr-Pz9l08YaRu2JIB704UWM3wBq8RfqAIekGQb9o9VgEZQr0Vx1Wlxp36f15ptmTAsmfNwP-0cQhQSczOkPcgcjbwdUT1FOzVwZ05qSDD9b~pMXwizk8g3efa2ACrozOw6yalMYQe5aWZh3-wcEVel6Wi5RSDzLoRkGqNIUYSI-avaM1M2a8xV41AvAjM7VKn~Ebf4cBsNLmmIhxR2PQH~Pi18kOBBSnbWCcyziAvJKCO7MOLwVwuJzi9tbNgaeCQGbRuZ~uIhomgKy5THF76g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    }
];

export default expressions;