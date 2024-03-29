const slugify=require('slugify')

module.exports= data = [
    {
      id: 1,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e4406f85-deaf-41fe-b030-c32fc9ac6b08/air-jordan-2-retro-j-balvin-shoes-QsTWbM.png",
      name: "Air Jordan 2 Retro Balvin",
      price: 400,
      color: "blue",
      quantity:1,
      slug:slugify("Air Jordan 2 Retro Balvin",{lower:true}),
      thumbnails: [
        {
          id: 1,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/16376cae-5d26-4432-ba6d-a40b1a34176c/air-jordan-2-retro-j-balvin-shoes-QsTWbM.png",
        },
        {
          id: 2,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ff7855a5-f9a6-453d-b9b8-e76ab3108ebb/air-jordan-2-retro-j-balvin-shoes-QsTWbM.png",
        },
        {
          id: 3,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c544b02-4a1d-4c87-a856-5d4afab489e1/air-jordan-2-retro-j-balvin-shoes-QsTWbM.png",
        },
        {
          id: 4,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5fa0562e-5d77-46e1-acb2-e2fcbd03812a/air-jordan-2-retro-j-balvin-shoes-QsTWbM.png",
        },
        {
          id: 5,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/088f806f-f4c8-40ad-b7fa-c239d1806d9e/air-jordan-2-retro-j-balvin-shoes-QsTWbM.png",
        },
        {
          id: 6,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e7e3348d-562b-44be-b137-77fedf46de72/air-jordan-2-retro-j-balvin-shoes-QsTWbM.png",
        },
        {
          id: 7,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4ef68dbe-8ecd-40a3-bf22-58fb0c6c4d05/air-jordan-2-retro-j-balvin-shoes-QsTWbM.png",
        },
        {
          id: 8,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c2d89c27-a470-4c24-a5f2-7601ca5d33ca/air-jordan-2-retro-j-balvin-shoes-QsTWbM.png",
        },
        {
          id: 9,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f18f2eba-eac3-470d-a888-f81d7cfbf5a2/air-jordan-2-retro-j-balvin-shoes-QsTWbM.png",
        },
      ],
      overview:
        "Like a breath of fresh air, this AJ2 refreshes its '86 design with plenty of energetic details and the sky's-the-limit style of the Prince of Reggaeton. Puffed-up panels on the upper and cloud graphics around the heel, collar and insole are paired with rainbow stitching accents and J Balvin's signature smiley face to steal the hearts of passers-by. Premium materials and Air cushioning in the heel will keep you dancing. And when the lights go out, you don't have to stop—just power up the tongue logo to let your glow-in-the-dark outsoles shine.",
      benefits: [
        {
          id: 1,
          text: "Nubuck leather feels soft and adds durability.",
        },
        {
          id: 2,
          text: "Air-Sole unit in the heel delivers lightweight, responsive cushioning.",
        },
        {
          id: 3,
          text: "Rubber outsole offers traction on a variety of surfaces.",
        },
        {
          id: 4,
          text: "Colour Shown: Celestine Blue/Multi-Colour/White",
        },
        {
          id: 5,
          text: "Country/Region of Origin: Vietname",
        },
      ],
      sizes: [
        {
          id: 1,
          size: "UK 3.5",
          is_available: true,
        },
        {
          id: 2,
          size: "UK 4",
          is_available: false,
        },
        {
          id: 3,
          size: "UK 4.5",
          is_available: true,
        },
        {
          id: 4,
          size: "UK 5",
          is_available: true,
        },
        {
          id: 5,
          size: "UK 5.5",
          is_available: true,
        },
        {
          id: 6,
          size: "UK 6.5",
          is_available: true,
        },
        {
          id: 7,
          size: "UK 7",
          is_available: true,
        },
        {
          id: 8,
          size: "UK 7.5",
          is_available: true,
        },
        {
          id: 9,
          size: "UK 8",
          is_available: false,
        },
        {
          id: 10,
          size: "UK 8.5",
          is_available: true,
        },
        {
          id: 11,
          size: "UK 9",
          is_available: true,
        },
        {
          id: 12,
          size: "UK 9.5",
          is_available: true,
        },
        {
          id: 13,
          size: "UK 10",
          is_available: false,
        },
      ],
      product_information:
      {text:
        "Declaration of Importer: Direct import by the individual customer. Marketed by: Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440",
      }
    },
    {
      id: 2,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d69697f5-91d5-4319-840e-80948cfd6a44/air-jordan-7-retro-sp-shoes-x5NMM9.png",
      name: "Air Jordan 7 Retro SP",
      price: 300,
      color: "red",
      quantity:1,
        slug:slugify("Air Jordan 7 Retro SP",{lower:true}),
      thumbnails: [
        {
          id: 1,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8c6c0164-318d-412c-8941-25f919fa7215/air-jordan-7-retro-sp-shoes-x5NMM9.png",
        },
        {
          id: 2,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c764c759-31a5-498a-920a-0d1652bc4650/air-jordan-7-retro-sp-shoes-x5NMM9.png",
        },
        {
          id: 3,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74de07bb-6e0b-4e8c-b010-5e3d87546d01/air-jordan-7-retro-sp-shoes-x5NMM9.png",
        },
        {
          id: 4,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9868ce17-8b96-478a-8c59-2ef247789954/air-jordan-7-retro-sp-shoes-x5NMM9.png",
        },
        {
          id: 5,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2953e005-badb-4a5e-8abc-3733edba8eb2/air-jordan-7-retro-sp-shoes-x5NMM9.png",
        },
        {
          id: 6,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b7dbeddc-dbdd-4f4a-8cd5-5e7d149c01dc/air-jordan-7-retro-sp-shoes-x5NMM9.png",
        },
        {
          id: 7,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/19191255-68f1-44cd-a694-b72b78cc5a32/air-jordan-7-retro-sp-shoes-x5NMM9.png",
        },
        {
          id: 8,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d58e692c-538b-4dfa-b82d-eee8fe3f2750/air-jordan-7-retro-sp-shoes-x5NMM9.png",
        },
        {
          id: 9,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8b978b8d-e35b-4dfa-a080-cea8a7b4d313/air-jordan-7-retro-sp-shoes-x5NMM9.png",
        },
      ],
      overview:
        "Inspired by the game shoe worn by Mike throughout the '92 season, the latest iteration of the AJ7 revives its championship legacy for a new generation of sneakerheads. Come for the throwback style, stay all day for the premium construction and signature Air cushioning.",
      benefits: [
        {
          id: 1,
          text: "Full-length Nike Air technology provides lightweight cushioning.",
        },
        {
          id: 2,
          text: "Leather and textile materials in the upper add durability.",
        },
        {
          id: 3,
          text: "Rubber outsole gives your style traction.",
        },
        {
          id: 4,
          text: "Colour Shown: Obsidian/Dark Obsidian/True Red/Metallic Gold",
        },
        {
          id: 5,
          text: "Country/Region of Origin: China",
        },
      ],
      sizes: [
        {
          id: 1,
          size: "UK 3.5",
          is_available: true,
        },
        {
          id: 2,
          size: "UK 4",
          is_available: false,
        },
        {
          id: 3,
          size: "UK 4.5",
          is_available: true,
        },
        {
          id: 4,
          size: "UK 5",
          is_available: true,
        },
        {
          id: 5,
          size: "UK 5.5",
          is_available: true,
        },
        {
          id: 6,
          size: "UK 6.5",
          is_available: true,
        },
        {
          id: 7,
          size: "UK 7",
          is_available: true,
        },
        {
          id: 8,
          size: "UK 7.5",
          is_available: true,
        },
        {
          id: 9,
          size: "UK 8",
          is_available: false,
        },
        {
          id: 10,
          size: "UK 8.5",
          is_available: true,
        },
        {
          id: 11,
          size: "UK 9",
          is_available: true,
        },
        {
          id: 12,
          size: "UK 9.5",
          is_available: true,
        },
        {
          id: 13,
          size: "UK 10",
          is_available: false,
        },
      ],
      product_information: {
        text: "Marketed by: Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440",
      },
    },
    {
      id: 3,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/616a8a2f-193d-437c-b336-b4df8eacf0d3/air-jordan-1-mid-se-shoes-pZbfP8.png",
      name: "Air Jordan 1 Mid SE",
      price: 500,
      color: "red",
      quantity:1,
      slug:slugify("Air Jordan 1 Mid SE",{lower:true}),
      thumbnails: [
        {
          id: 1,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4f2b31c3-e0d4-4895-b505-37782acd639d/air-jordan-1-mid-se-shoes-pZbfP8.png",
        },
        {
          id: 2,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bee8af25-08e4-4bbb-84e2-dfeda6a3f32a/air-jordan-1-mid-se-shoes-pZbfP8.png",
        },
        {
          id: 3,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0dc4bf49-d672-4d68-a36a-273bbfa0bde3/air-jordan-1-mid-se-shoes-pZbfP8.png",
        },
        {
          id: 4,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/78a135b7-9923-4136-8908-53b7b003eeba/air-jordan-1-mid-se-shoes-pZbfP8.png",
        },
        {
          id: 5,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5efb6651-06bd-4933-bf78-ce983151a4fb/air-jordan-1-mid-se-shoes-pZbfP8.png",
        },
        {
          id: 6,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f3784c19-9e21-4bd6-a968-b3855c80ca8e/air-jordan-1-mid-se-shoes-pZbfP8.png",
        },
        {
          id: 7,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0acb2d92-7368-4275-8613-02d676434f09/air-jordan-1-mid-se-shoes-pZbfP8.png",
        },
        {
          id: 8,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8dcd67ee-56f1-4a31-a856-1a4ca6f9dbf9/air-jordan-1-mid-se-shoes-pZbfP8.png",
        },
        {
          id: 9,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8dcd67ee-56f1-4a31-a856-1a4ca6f9dbf9/air-jordan-1-mid-se-shoes-pZbfP8.png",
        },
      ],
      overview:
        "Get that Jordan energy on your feet this festive season. Rich grain leather with bright details make this pair shine like festive lights.",
      benefits: [
        {
          id: 1,
          text: "Nike Air technology absorbs impact for cushioning with every step.",
        },
        {
          id: 2,
          text: "Genuine and synthetic leather and textile upper for durability.",
        },
      ],
      sizes: [
        {
          id: 1,
          size: "UK 3.5",
          is_available: true,
        },
        {
          id: 2,
          size: "UK 4",
          is_available: false,
        },
        {
          id: 3,
          size: "UK 4.5",
          is_available: true,
        },
        {
          id: 4,
          size: "UK 5",
          is_available: true,
        },
        {
          id: 5,
          size: "UK 5.5",
          is_available: true,
        },
        {
          id: 6,
          size: "UK 6.5",
          is_available: true,
        },
        {
          id: 7,
          size: "UK 7",
          is_available: true,
        },
        {
          id: 8,
          size: "UK 7.5",
          is_available: true,
        },
        {
          id: 9,
          size: "UK 8",
          is_available: false,
        },
        {
          id: 10,
          size: "UK 8.5",
          is_available: true,
        },
        {
          id: 11,
          size: "UK 9",
          is_available: true,
        },
        {
          id: 12,
          size: "UK 9.5",
          is_available: true,
        },
        {
          id: 13,
          size: "UK 10",
          is_available: false,
        },
      ],
      product_information: {
        text: "Declaration of Importer: Direct import by the individual customer",
      },
    },
    {
      id: 4,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1698d474-02df-4123-89c5-8630cdf54b4b/air-jordan-6-retro-shoes-fjwJgW.png",
      name: "Air Jordan 6 Retro",
      price: 200,
      color: "black",
      quantity:1,
      slug:slugify("Air Jordan 6 Retro",{lower:true}),
      thumbnails: [
        {
          id: 1,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b56de370-c5b8-43d3-bbd1-e9c44f4ed247/air-jordan-6-retro-shoes-fjwJgW.png",
        },
        {
          id: 2,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/501955f6-b9cd-4889-ae44-b70f500724ff/air-jordan-6-retro-shoes-fjwJgW.png",
        },
        {
          id: 3,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/296d6cb2-b2e2-42a7-9265-8661efcef918/air-jordan-6-retro-shoes-fjwJgW.png",
        },
        {
          id: 4,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4b5ae472-ff1e-4bfd-a47c-d46f73665a9e/air-jordan-6-retro-shoes-fjwJgW.png",
        },
        {
          id: 5,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/285d16bf-dba4-4726-a62f-80b79f888fc3/air-jordan-6-retro-shoes-fjwJgW.png",
        },
        {
          id: 6,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/20c63e08-c2e3-4e82-88b0-9f927782e2af/air-jordan-6-retro-shoes-fjwJgW.png",
        },
        {
          id: 7,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2f5a08b7-7963-4063-868e-962f7dc65502/air-jordan-6-retro-shoes-fjwJgW.png",
        },
        {
          id: 8,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8912b22e-33aa-4711-a329-b4faa800469f/air-jordan-6-retro-shoes-fjwJgW.png",
        },
        {
          id: 9,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6e992451-4138-4868-91c9-af70de74ec54/air-jordan-6-retro-shoes-fjwJgW.png",
        },
      ],
      overview:
        "Championship vibes. MJ's 6th signature shoe debuted in '91—the year he earned his first ring—making the AJ6 an instant icon. This fresh take on the series-clinching classic has a sleek upper made from synthetic leather. Metallic accents add extra off-court flair, making these kicks your outfit MVPs.",
      benefits: [
        {
          id: 1,
          text: "Air-Sole unit and foam midsole cushion every step.",
        },
        {
          id: 2,
          text: "Toggle lacing lets you easily adjust your fit.",
        },
        {
          id: 3,
          text: "TColour Shown: Black/Black/Metallic Silver",
        },
        {
          id: 4,
          text: "Country/Region of Origin: Vietnam",
        },
      ],
      sizes: [
        {
          id: 1,
          size: "UK 3.5",
          is_available: true,
        },
        {
          id: 2,
          size: "UK 4",
          is_available: false,
        },
        {
          id: 3,
          size: "UK 4.5",
          is_available: true,
        },
        {
          id: 4,
          size: "UK 5",
          is_available: true,
        },
        {
          id: 5,
          size: "UK 5.5",
          is_available: true,
        },
        {
          id: 6,
          size: "UK 6.5",
          is_available: true,
        },
        {
          id: 7,
          size: "UK 7",
          is_available: true,
        },
        {
          id: 8,
          size: "UK 7.5",
          is_available: true,
        },
        {
          id: 9,
          size: "UK 8",
          is_available: false,
        },
        {
          id: 10,
          size: "UK 8.5",
          is_available: true,
        },
        {
          id: 11,
          size: "UK 9",
          is_available: true,
        },
        {
          id: 12,
          size: "UK 9.5",
          is_available: true,
        },
        {
          id: 13,
          size: "UK 10",
          is_available: false,
        },
      ],
      product_information: {
        text: "Declaration of Importer: Direct import by the individual customer Marketed by: Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440",
      },
    },
    {
      id: 5,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/04984d02-3d67-40c4-a228-0ad69b65d2f2/air-jordan-xxxvii-rui-basketball-shoes-z63K2L.png",
      name: "Air Jordan XXXVII Rui",
      price: 300,
      color: "red",
      quantity:1,
      slug:slugify("Air Jordan XXXVII Rui",{lower:true}),
      thumbnails: [
        {
          id: 1,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1c5f57af-0ecd-4b06-b992-9bcb2af12886/air-jordan-xxxvii-rui-basketball-shoes-z63K2L.png",
        },
        {
          id: 2,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1f28b81e-28a0-42ee-92b3-63e0750fc26b/air-jordan-xxxvii-rui-basketball-shoes-z63K2L.png",
        },
        {
          id: 3,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6ffe2ed0-db65-4f09-b720-191b7c6be104/air-jordan-xxxvii-rui-basketball-shoes-z63K2L.png",
        },
        {
          id: 4,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d86ed8f6-9dc7-47e7-9f8b-d25eca143180/air-jordan-xxxvii-rui-basketball-shoes-z63K2L.png",
        },
        {
          id: 5,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ed994ef8-93f6-43b2-8426-8682e40b1de1/air-jordan-xxxvii-rui-basketball-shoes-z63K2L.png",
        },
        {
          id: 6,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a7c1d400-6546-4d7c-a581-a1d3e53be98b/air-jordan-xxxvii-rui-basketball-shoes-z63K2L.png",
        },
        {
          id: 7,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/671f7874-a716-4a0f-8ef2-a7d6bca34ab7/air-jordan-xxxvii-rui-basketball-shoes-z63K2L.png",
        },
        {
          id: 8,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1c07de7c-d41f-4317-96bb-ebc32a655022/air-jordan-xxxvii-rui-basketball-shoes-z63K2L.png",
        },
        {
          id: 9,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2358f1a9-c4c6-4849-a90f-3dff9f96b67e/air-jordan-xxxvii-rui-basketball-shoes-z63K2L.png",
        },
      ],
      overview:
        "You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about takeoffs and landings, with multiple Air units to get you off the ground and our signature Formula 23 foam to cushion your impact. Up top, you'll find layers of tough, reinforced leno-weave fabric that'll keep you contained—and leave your game uncompromised—no matter how fast you move.",
      benefits: [
        {
          id: 1,
          text: "Colours celebrate the on-court skills of Rui Hachimura.",
        },
        {
          id: 2,
          text: "Top-line shape and Jordan Air on the tongue nod to the AJ7's iconic design.",
        },
        {
          id: 3,
          text: "Upper design is a throwback to the exoskeleton style of the AJ7.",
        },
        {
          id: 4,
          text: "Colour Shown: Siren Red/Flash Crimson/Armoury Navy/Sea Glass",
        },
        {
          id: 5,
          text: "Country/Region of Origin: Vietnam",
        },
      ],
      sizes: [
        {
          id: 1,
          size: "UK 3.5",
          is_available: true,
        },
        {
          id: 2,
          size: "UK 4",
          is_available: false,
        },
        {
          id: 3,
          size: "UK 4.5",
          is_available: true,
        },
        {
          id: 4,
          size: "UK 5",
          is_available: true,
        },
        {
          id: 5,
          size: "UK 5.5",
          is_available: true,
        },
        {
          id: 6,
          size: "UK 6.5",
          is_available: true,
        },
        {
          id: 7,
          size: "UK 7",
          is_available: true,
        },
        {
          id: 8,
          size: "UK 7.5",
          is_available: true,
        },
        {
          id: 9,
          size: "UK 8",
          is_available: false,
        },
        {
          id: 10,
          size: "UK 8.5",
          is_available: true,
        },
        {
          id: 11,
          size: "UK 9",
          is_available: true,
        },
        {
          id: 12,
          size: "UK 9.5",
          is_available: true,
        },
        {
          id: 13,
          size: "UK 10",
          is_available: false,
        },
      ],
      product_information: {
        text: "Declaration of Importer: Direct import by the individual customer ,Declaration of Importer: Direct import by the individual customer  ",
      },
    },
    {
      id: 6,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/47f3d481-4f86-4c1d-ae9e-17b8163bc530/luka-1-pf-basketball-shoes-4dv93M.png",
      name: "Luka 1 PF",
      price: 350,
      color: "red",
      quantity:1,
      slug:slugify("Luka 1 PF",{lower:true}),
      thumbnails: [
        {
          id: 1,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cdb92da2-e37d-4110-83ec-7f8883eae69d/luka-1-pf-basketball-shoes-4dv93M.png",
        },
        {
          id: 2,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2f0ebb41-38af-41b8-88ad-a7e1c1a7839e/luka-1-pf-basketball-shoes-4dv93M.png",
        },
        {
          id: 3,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0c3188f9-c07e-403d-b868-168030a1bb8d/luka-1-pf-basketball-shoes-4dv93M.png",
        },
        {
          id: 4,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2e2d9243-62a9-48c6-98cb-8f8e3d67616e/luka-1-pf-basketball-shoes-4dv93M.png",
        },
        {
          id: 5,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/21c7d1f0-b000-4a3e-aafa-132822baa27e/luka-1-pf-basketball-shoes-4dv93M.png",
        },
        {
          id: 6,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/44e64785-fb8e-4ca9-94c5-d523ab8e965b/luka-1-pf-basketball-shoes-4dv93M.png",
        },
        {
          id: 7,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c911eebd-90bc-437d-a771-c004a8d5b0b3/luka-1-pf-basketball-shoes-4dv93M.png",
        },
        {
          id: 8,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/13ae9c88-1808-421e-8dcb-535006dc4da2/luka-1-pf-basketball-shoes-4dv93M.png",
        },
        {
          id: 9,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2358f1a9-c4c6-4849-a90f-3dff9f96b67e/air-jordan-xxxvii-rui-basketball-shoes-z63K2L.png",
        },
      ],
      overview:
        "Designed for No. 77 and made for every athlete craving speed and efficiency, Luka's debut delivers the goods. The first shoe with full-length Formula 23 foam, it has an ultra-supportive fit crafted with the step-back in mind. Meanwhile, strong and lightweight Flight Wire embroidery keeps you feeling contained, whether you're playing indoors or out. This is the assist you've been waiting for—get out there and make your shot. This version is designed wide and made for play on outdoor courts.",
      benefits: [
        {
          id: 1,
          text: "Colours celebrate the on-court skills of Rui Hachimura.",
        },
        {
          id: 2,
          text: "Top-line shape and Jordan Air on the tongue nod to the AJ7's iconic design.",
        },
        {
          id: 3,
          text: "Upper design is a throwback to the exoskeleton style of the AJ7.",
        },
        {
          id: 4,
          text: "Colour Shown: Siren Red/Flash Crimson/Armoury Navy/Sea Glass",
        },
        {
          id: 5,
          text: "Country/Region of Origin: Vietnam",
        },
      ],
      sizes: [
        {
          id: 1,
          size: "UK 3.5",
          is_available: true,
        },
        {
          id: 2,
          size: "UK 4",
          is_available: false,
        },
        {
          id: 3,
          size: "UK 4.5",
          is_available: true,
        },
        {
          id: 4,
          size: "UK 5",
          is_available: true,
        },
        {
          id: 5,
          size: "UK 5.5",
          is_available: true,
        },
        {
          id: 6,
          size: "UK 6.5",
          is_available: true,
        },
        {
          id: 7,
          size: "UK 7",
          is_available: true,
        },
        {
          id: 8,
          size: "UK 7.5",
          is_available: true,
        },
        {
          id: 9,
          size: "UK 8",
          is_available: false,
        },
        {
          id: 10,
          size: "UK 8.5",
          is_available: true,
        },
        {
          id: 11,
          size: "UK 9",
          is_available: true,
        },
        {
          id: 12,
          size: "UK 9.5",
          is_available: true,
        },
        {
          id: 13,
          size: "UK 10",
          is_available: false,
        },
      ],
      product_information: {
        text: "Declaration of Importer: Direct import by the individual customer, Marketed by: Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440",
      },
    },
    {
      id: 7,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/41e51f2a-7664-4f8b-9608-b047cea21b45/luka-1-pf-basketball-shoes-XTzWkj.png",
      name: "Luka 2 PF",
      price: 550,
      color: "blue",
      quantity:1,
      slug:slugify("Luka 2 PF ",{lower:true}),
      thumbnails: [
        {
          id: 1,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/64f3fca5-b422-40c2-a1be-6d0069e08208/luka-1-pf-basketball-shoes-XTzWkj.png",
        },
        {
          id: 2,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/46e8eeb6-d132-4121-8470-953e9fe4c509/luka-1-pf-basketball-shoes-XTzWkj.png",
        },
        {
          id: 3,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/99d9ae7f-26b2-45af-a4c3-3bcb5f554027/luka-1-pf-basketball-shoes-XTzWkj.png",
        },
        {
          id: 4,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3519c4a1-3b3b-4ba2-8107-83ae07218ce4/luka-1-pf-basketball-shoes-XTzWkj.png",
        },
        {
          id: 5,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7cbfcf4a-41b9-40e1-bd80-d24c4e141e1e/luka-1-pf-basketball-shoes-XTzWkj.png",
        },
        {
          id: 6,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0b7a426a-b08f-4347-9ea0-9d97c4ccbb06/luka-1-pf-basketball-shoes-XTzWkj.png",
        },
        {
          id: 7,
          img: "https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/8c668c0a-bffa-4d4d-8a6c-e23482e0c84d/luka-1-pf-basketball-shoes-XTzWkj.png",
        },
        {
          id: 8,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/86a5c2c7-7651-45fa-a4e9-f7ea9edbc82f/luka-1-pf-basketball-shoes-XTzWkj.png",
        },
        {
          id: 9,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3519c4a1-3b3b-4ba2-8107-83ae07218ce4/luka-1-pf-basketball-shoes-XTzWkj.png",
        },
      ],
      overview:
        "Designed for No. 77 and made for every athlete craving speed and efficiency, Luka's debut delivers the goods. The first shoe with full-length Formula 23 foam, it has an ultra-supportive fit crafted with the step-back in mind. Meanwhile, strong and lightweight Flight Wire embroidery keeps you feeling contained, whether you're playing indoors or out. This is the assist you've been waiting for—get out there and make your shot. This version is designed wider and made for play on outdoor courts.",
      benefits: [
        {
          id: 1,
          text: "Colours celebrate the on-court skills of Rui Hachimura.",
        },
        {
          id: 2,
          text: "Top-line shape and Jordan Air on the tongue nod to the AJ7's iconic design.",
        },
        {
          id: 3,
          text: "Upper design is a throwback to the exoskeleton style of the AJ7.",
        },
        {
          id: 4,
          text: "Colour Shown: Siren Red/Flash Crimson/Armoury Navy/Sea Glass",
        },
        {
          id: 5,
          text: "Country/Region of Origin: Vietnam",
        },
      ],
      sizes: [
        {
          id: 1,
          size: "UK 3.5",
          is_available: true,
        },
        {
          id: 2,
          size: "UK 4",
          is_available: false,
        },
        {
          id: 3,
          size: "UK 4.5",
          is_available: true,
        },
        {
          id: 4,
          size: "UK 5",
          is_available: true,
        },
        {
          id: 5,
          size: "UK 5.5",
          is_available: true,
        },
        {
          id: 6,
          size: "UK 6.5",
          is_available: true,
        },
        {
          id: 7,
          size: "UK 7",
          is_available: true,
        },
        {
          id: 8,
          size: "UK 7.5",
          is_available: true,
        },
        {
          id: 9,
          size: "UK 8",
          is_available: false,
        },
        {
          id: 10,
          size: "UK 8.5",
          is_available: true,
        },
        {
          id: 11,
          size: "UK 9",
          is_available: true,
        },
        {
          id: 12,
          size: "UK 9.5",
          is_available: true,
        },
        {
          id: 13,
          size: "UK 10",
          is_available: false,
        },
      ],
      product_information: {
        text: "Declaration of Importer: Direct import by the individual customer, Marketed by: Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440",
      },
    },
    {
      id: 8,
      img: "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/4a44e41a-f17a-4036-b06b-b17e641d073f/air-jordan-legacy-312-shoes-8j5LzH.png",
      name: "Air Jordan Legacy 312",
      price: 650,
      color: "blue",
      quantity:1,
      slug:slugify("Air Jordan Legacy 312",{lower:true}),
      thumbnails: [
        {
          id: 1,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d93758d2-8a48-4fed-a951-8e63e94311a2/air-jordan-legacy-312-shoes-8j5LzH.png",
        },
        {
          id: 2,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b1c175f7-733b-4ab1-9975-255b75b508a1/air-jordan-legacy-312-shoes-8j5LzH.png",
        },
        {
          id: 3,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c0190a72-e860-4c3d-b926-26676257b34c/air-jordan-legacy-312-shoes-8j5LzH.png",
        },
        {
          id: 4,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5080f2ec-1d57-4fa7-8660-c1e291a87db4/air-jordan-legacy-312-shoes-8j5LzH.png",
        },
        {
          id: 5,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b0e7fabd-a99b-4e08-9f2c-93197e012181/air-jordan-legacy-312-shoes-8j5LzH.png",
        },
        {
          id: 6,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4f30d377-fad6-4230-a2c0-8ba3d8b1373e/air-jordan-legacy-312-shoes-8j5LzH.png",
        },
        {
          id: 7,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/33a152d4-6ebb-4f05-8505-a188b8a18cde/air-jordan-legacy-312-shoes-8j5LzH.png",
        },
        {
          id: 8,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b397d87f-5b80-4fc6-ac22-e58e9b723f9a/air-jordan-legacy-312-shoes-8j5LzH.png",
        },
      
      ],
      overview:
        "The Legacy 312 was designed as a collage of iconic Air Jordan elements and this version is no different. What's new here are the colours: luminous, blooming jewel tones grounded in light neutrals. Sapphire and University Red come through big and bold, while Fossil Stone and Light Bone keep everything in check. And that speckled heel, with its multicolour mosaic? Now that's a detail to love.",
      benefits: [
        {
          id: 1,
          text: "The design combines iconic elements of the AJ 3, AJ 1 and Alpha Force.",
        },
        {
          id: 2,
          text: "The leather and synthetic upper adds a midfoot strap for snug comfort.",
        },
        {
          id: 3,
          text: "Visible Air-Sole unit at the heel enhances cushioning.",
        },
        {
          id: 4,
          text: "Colour Shown: Sail/White/Fossil Stone/Concord",
        },
        {
          id: 5,
          text: "Country/Region of Origin: China",
        },
      ],
      sizes: [
        {
          id: 1,
          size: "UK 3.5",
          is_available: true,
        },
        {
          id: 2,
          size: "UK 4",
          is_available: false,
        },
        {
          id: 3,
          size: "UK 4.5",
          is_available: true,
        },
        {
          id: 4,
          size: "UK 5",
          is_available: true,
        },
        {
          id: 5,
          size: "UK 5.5",
          is_available: true,
        },
        {
          id: 6,
          size: "UK 6.5",
          is_available: true,
        },
        {
          id: 7,
          size: "UK 7",
          is_available: true,
        },
        {
          id: 8,
          size: "UK 7.5",
          is_available: true,
        },
        {
          id: 9,
          size: "UK 8",
          is_available: false,
        },
        {
          id: 10,
          size: "UK 8.5",
          is_available: true,
        },
        {
          id: 11,
          size: "UK 9",
          is_available: true,
        },
        {
          id: 12,
          size: "UK 9.5",
          is_available: true,
        },
        {
          id: 13,
          size: "UK 10",
          is_available: false,
        },
      ],
      product_information: {
        text: "Declaration of Importer: Direct import by the individual customer",
      },
    },
    {
      id: 9,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/037939bd-e08f-4c28-a3d2-b89c1578f7fc/jordan-stay-loyal-2-shoes-sDkgDk.png",
      name: "Jordan Stay Loyal 2",
      price: 250,
      color: "black",
      quantity:1,
      slug:slugify("Jordan Stay Loyal 2",{lower:true}),
      thumbnails: [
        {
          id: 1,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/75de280b-a393-4b45-909f-777c77944cdd/jordan-stay-loyal-2-shoes-sDkgDk.png",
        },
        {
          id: 2,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b4b5e6b7-5884-44c6-83b5-ae7ff38407c3/jordan-stay-loyal-2-shoes-sDkgDk.png",
        },
        {
          id: 3,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0e0a38c4-689e-4d98-be71-75a5d4b9b121/jordan-stay-loyal-2-shoes-sDkgDk.png",
        },
        {
          id: 4,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/90be98ae-3dd5-48ef-8824-df7f198ee2d3/jordan-stay-loyal-2-shoes-sDkgDk.png",
        },
        {
          id: 5,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/912adc2b-1ec7-470d-bfbb-bd14290ccaa5/jordan-stay-loyal-2-shoes-sDkgDk.png",
        },
        {
          id: 6,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d94105d6-c702-4da7-a3a3-4b2a01d60a06/jordan-stay-loyal-2-shoes-sDkgDk.png",
        },
        {
          id: 7,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dc95b1d0-e033-4566-a6e0-61da0f270ec8/jordan-stay-loyal-2-shoes-sDkgDk.png",
        },
        {
          id: 8,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2474473a-7b2b-462e-a041-42b962624382/jordan-stay-loyal-2-shoes-sDkgDk.png",
        },
      
      ],
      overview:
        "Inspired by generations of Js, these kicks are a collage of cool. Design details recall decades of legendary shoes while paying homage to MJs storied career. Breathable mesh, sturdy leather and lightweight Air cushioning in the heel make it that much easier to walk in the footsteps of greatness.",
      benefits: [
        {
          id: 1,
          text: "Nike Air technology absorbs impact for cushioning with every step.",
        },
        {
          id: 2,
          text: "Leather in the upper breaks in easily and makes for a long-lasting shoe.",
        },
        {
          id: 3,
          text: "Knit mesh toe lets your feet breath.",
        },
      
      ],
      sizes: [
        {
          id: 1,
          size: "UK 3.5",
          is_available: true,
        },
        {
          id: 2,
          size: "UK 4",
          is_available: false,
        },
        {
          id: 3,
          size: "UK 4.5",
          is_available: true,
        },
        {
          id: 4,
          size: "UK 5",
          is_available: true,
        },
        {
          id: 5,
          size: "UK 5.5",
          is_available: true,
        },
        {
          id: 6,
          size: "UK 6.5",
          is_available: true,
        },
        {
          id: 7,
          size: "UK 7",
          is_available: true,
        },
        {
          id: 8,
          size: "UK 7.5",
          is_available: true,
        },
        {
          id: 9,
          size: "UK 8",
          is_available: false,
        },
        {
          id: 10,
          size: "UK 8.5",
          is_available: true,
        },
        {
          id: 11,
          size: "UK 9",
          is_available: true,
        },
        {
          id: 12,
          size: "UK 9.5",
          is_available: true,
        },
        {
          id: 13,
          size: "UK 10",
          is_available: false,
        },
      ],
      product_information: {
        text: "Declaration of Importer: Direct import by the individual customer",
      },
    },
    {
      id: 10,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/875b2ac6-0161-4d86-af23-df785e51f999/air-jordan-xxxvi-rui-basketball-shoes-JL99LQ.png",
      name: "Air Jordan XXXVI RUI",
      price: 650,
      color: "black",
      quantity:1,
      slug:slugify("Air Jordan XXXVI",{lower:true}),
      thumbnails: [
        {
          id: 1,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9dab9e2e-fc97-4006-bc7f-35921b5987a1/air-jordan-xxxvi-rui-basketball-shoes-JL99LQ.png",
        },
        {
          id: 2,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3eab0201-c28f-425b-88e8-9451392252f5/air-jordan-xxxvi-rui-basketball-shoes-JL99LQ.png",
        },
        {
          id: 3,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/441ea555-67c9-4412-9067-ebb5766707bb/air-jordan-xxxvi-rui-basketball-shoes-JL99LQ.png",
        },
        {
          id: 4,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/989b5103-e5df-4abc-98ff-48555d8ace24/air-jordan-xxxvi-rui-basketball-shoes-JL99LQ.png",
        },
        {
          id: 5,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2a9dac8a-e338-4750-a061-75b576e8f7da/air-jordan-xxxvi-rui-basketball-shoes-JL99LQ.png",
        },
        {
          id: 6,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9ad5d4f4-df01-424e-a228-a59539d06bee/air-jordan-xxxvi-rui-basketball-shoes-JL99LQ.png",
        },
        {
          id: 7,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dd8cb390-bdb6-4a9f-858e-eb1cd215d4c1/air-jordan-xxxvi-rui-basketball-shoes-JL99LQ.png",
        },
        {
          id: 8,
          img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/00897c68-5b6d-4659-9f46-91a8949cade9/air-jordan-xxxvi-rui-basketball-shoes-JL99LQ.png",
        },
      
      ],
      overview:
        "From the perimeter to the hoop, take the court with confidence. This is one of the lightest Air Jordan game shoes to date, with a minimal but durable leno-weave upper reinforced with tough plastic details. Meanwhile, Zoom Air cushioning delivers energy return and elite responsiveness. The game asks for everything—now you have the shoe to match.",
      benefits: [
        {
          id: 1,
          text: "Nike Air technology absorbs impact for cushioning with every step.",
        },
        {
          id: 2,
          text: "Leather in the upper breaks in easily and makes for a long-lasting shoe.",
        },
        {
          id: 3,
          text: "Knit mesh toe lets your feet breath.",
        },
      
      ],
      sizes: [
        {
          id: 1,
          size: "UK 3.5",
          is_available: true,
        },
        {
          id: 2,
          size: "UK 4",
          is_available: false,
        },
        {
          id: 3,
          size: "UK 4.5",
          is_available: true,
        },
        {
          id: 4,
          size: "UK 5",
          is_available: true,
        },
        {
          id: 5,
          size: "UK 5.5",
          is_available: true,
        },
        {
          id: 6,
          size: "UK 6.5",
          is_available: true,
        },
        {
          id: 7,
          size: "UK 7",
          is_available: true,
        },
        {
          id: 8,
          size: "UK 7.5",
          is_available: true,
        },
        {
          id: 9,
          size: "UK 8",
          is_available: false,
        },
        {
          id: 10,
          size: "UK 8.5",
          is_available: true,
        },
        {
          id: 11,
          size: "UK 9",
          is_available: true,
        },
        {
          id: 12,
          size: "UK 9.5",
          is_available: true,
        },
        {
          id: 13,
          size: "UK 10",
          is_available: false,
        },
      ],
      product_information: {
        text: "Declaration of Importer: Direct import by the individual customer",
      },
    },
  ];
  
  
  
  
  
  
  
