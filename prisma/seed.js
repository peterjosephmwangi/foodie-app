const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.products.create({
      data: {
        title: "Margherita Pizza",
        description:
          "Classic Italian pizza topped with fresh tomato sauce, mozzarella cheese, basil leaves, and a drizzle of olive oil.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696625701/vonbi6qsb4t8tlxqrpn4.jpg",
        category: "Pizza",
        price: 1099, // EG: 25.00
      },
    });

    await prisma.products.create({
      data: {
        title: "Pepperoni Lover's Pizza",
        description:
          "A pizza lover's dream! Loaded with pepperoni slices, tomato sauce, and melted mozzarella cheese.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626074/o8g49lmgj4iyofr2uc13.jpg",
        category: "Pizza",
        price: 1299,
      },
    });

    await prisma.products.create({
      data: {
        title: "Veggie Delight Pizza",
        description:
          "A garden-fresh delight featuring bell peppers, onions, mushrooms, black olives, and tomatoes on a bed of cheese and sauce.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626188/op9nd7uzwylb8hqaypdm.jpg",
        category: "Pizza",
        price: 1149,
      },
    });

    await prisma.products.create({
      data: {
        title: "BBQ Chicken Pizza",
        description:
          "Tender chunks of grilled chicken, sweet and tangy barbecue sauce, red onions, and cilantro on a barbecue-infused crust.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626260/bbecynidognh7ywyv4xl.jpg",
        category: "Pizza",
        price: 5999,
      },
    });

    await prisma.products.create({
      data: {
        title: "Hawaiian Pizza",
        description:
          "A tropical twist with ham, pineapple chunks, and mozzarella cheese, all on a tomato sauce base.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626357/g2ijqhbbzgfwqlq0oewt.jpg",
        category: "Pizza",
        price: 1299,
      },
    });

    await prisma.products.create({
      data: {
        title: "Meat Feast Pizza",
        description:
          "Carnivore's delight! Loaded with a variety of meats including pepperoni, sausage, bacon, and ground beef.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626430/wkviyluialbykiqq7zo4.jpg",
        category: "Pizza",
        price: 6589,
      },
    });

    await prisma.products.create({
      data: {
        title: "Pesto and Goat Cheese Pizza",
        description:
          "A gourmet treat with pesto sauce, creamy goat cheese, sun-dried tomatoes, and roasted garlic on a thin crust.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626462/iriydebw8vovl54onfpc.jpg",
        category: "Pizza",
        price: 22499,
      },
    });

    await prisma.products.create({
      data: {
        title: "Classic BLT Sandwich",
        description:
          "A timeless favorite featuring crispy bacon, fresh lettuce, ripe tomatoes, and mayo on toasted bread.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626635/uojcsk1mqn4oomrmbkor.jpg",
        category: "Sandwich",
        price: 23599,
      },
    });

    await prisma.products.create({
      data: {
        title: "Turkey and Swiss Panini",
        description:
          "Sliced turkey breast, Swiss cheese, and Dijon mustard pressed between two slices of ciabatta bread.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626690/tciqolxthrw81hta0ash.jpg",
        category: "Sandwich",
        price: 8999,
      },
    });

    await prisma.products.create({
      data: {
        title: "Veggie Wrap",
        description:
          "A healthy wrap filled with mixed greens, hummus, roasted vegetables, and feta cheese in a spinach tortilla.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626723/a4cmzovv0gfwubhlwudu.jpg",
        category: "Sandwich",
        price: 159599,
      },
    });

    await prisma.products.create({
      data: {
        title: "Reuben Sandwich",
        description:
          "Sliced corned beef, sauerkraut, Swiss cheese, and Russian dressing on rye bread, grilled to perfection.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626755/nyiyqx0k1bhn1ovzdamk.jpg",
        category: "Sandwich",
        price: 999599,
      },
    });

    await prisma.products.create({
      data: {
        title: "Chicken Caesar Wrap",
        description:
          "Grilled chicken breast, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a flour tortilla.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626789/nrut01wychhposgy7yif.jpg",
        category: "Sandwich",
        price: 9699,
      },
    });

    await prisma.products.create({
      data: {
        title: "Caprese Panini",
        description:
          "Fresh mozzarella, ripe tomatoes, basil leaves, and balsamic glaze pressed between slices of ciabatta bread.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626817/vywoxys7h55ggvtkaysm.jpg",
        category: "Sandwich",
        price: 125,
      },
    });

    await prisma.products.create({
      data: {
        title: "Tuna Salad Sandwich",
        description:
          "Tuna salad with celery, onions, and mayo, served on whole grain bread with lettuce and tomato.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626847/j3uuyyjinhlxct3gfpcl.jpg",
        category: "Sandwich",
        price: 1599,
      },
    });

    await prisma.products.create({
      data: {
        title: "Philly Cheesesteak",
        description:
          "Sliced beefsteak, sautéed onions, green peppers, and melted provolone cheese on a hoagie roll.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626923/pe9lpmvxiuzaedjkwmhz.jpg",
        category: "Sandwich",
        price: 259,
      },
    });

    await prisma.products.create({
      data: {
        title: "Club Sandwich",
        description:
          "A triple-decker delight with layers of turkey, ham, bacon, lettuce, tomato, and mayo on toasted white bread.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696626960/vr2etvlal8bqdmmhstff.jpg",
        category: "Sandwich",
        price: 104959,
      },
    });

    await prisma.products.create({
      data: {
        title: "BBQ Pulled Pork Sandwich",
        description:
          "Slow-cooked pulled pork smothered in barbecue sauce, served on a bun with coleslaw.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696627082/dekjv7sjq0rr98pepclb.jpg",
        category: "Sandwich",
        price: 99999,
      },
    });

    await prisma.products.create({
      data: {
        title: "Classic Cheeseburger",
        description:
          "A timeless favorite featuring a juicy beef patty, melted cheddar cheese, lettuce, tomato, and pickles on a sesame seed bun.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696627474/rmx1wyozverwwdjuacmn.jpg",
        category: "Burger",
        price: 8999,
      },
    });
    await prisma.products.create({
      data: {
        title: "Veggie Burger",
        description:
          "A delicious plant-based patty topped with lettuce, tomato, red onion, and vegan mayo on a whole wheat bun.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696627548/v6i8f96okjz0m0xaj4uc.jpg",
        category: "Burger",
        price: 6599,
      },
    });
    await prisma.products.create({
      data: {
        title: "BBQ Bacon Burger",
        description:
          "A smoky delight featuring a beef patty, crispy bacon, barbecue sauce, cheddar cheese, and onion rings on a brioche bun.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696627583/ocqvphd7lh4mpsdizuzr.jpg",
        category: "Burger",
        price: 4099,
      },
    });
    await prisma.products.create({
      data: {
        title: "Mushroom Swiss Burger",
        description:
          "A savory combination of a beef patty, sautéed mushrooms, Swiss cheese, lettuce, and garlic aioli on a pretzel bun.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696627614/gnyrl7pkqdrxn89l9p6c.jpg",
        category: "Burger",
        price: 12499,
      },
    });
    await prisma.products.create({
      data: {
        title: "Spicy Chicken Burger",
        description:
          "Crispy chicken breast, spicy mayo, lettuce, tomato, and pepper jack cheese on a toasted brioche bun.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696627645/uxxj6nlruyhchdy9lpds.jpg",
        category: "Burger",
        price: 10099,
      },
    });
    await prisma.products.create({
      data: {
        title: "Double Bacon Cheeseburger",
        description:
          "Two juicy beef patties, double the bacon, American cheese, lettuce, tomato, and special sauce on a classic bun.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696627676/qhx1ls7ugmexuqab0ooj.jpg",
        category: "Burger",
        price: 6699,
      },
    });
    await prisma.products.create({
      data: {
        title: "Guacamole Burger",
        description:
          "A zesty burger featuring a beef patty, homemade guacamole, red onion, lettuce, and pepper jack cheese on a ciabatta roll.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696627706/z8eq2qghrafohwpzrt0u.jpg",
        category: "Burger",
        price: 8999,
      },
    });

    await prisma.products.create({
      data: {
        title: "Classic Spaghetti Bolognese",
        description:
          "Al dente spaghetti pasta topped with a rich and savory meaty Bolognese sauce, garnished with grated Parmesan cheese.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696627977/kpm5nz6z0lyoxxodezzi.jpg",
        category: "Noodles",
        price: 1299,
      },
    });
    await prisma.products.create({
      data: {
        title: "Pad Thai",
        description:
          "A Thai favorite featuring stir-fried rice noodles, shrimp or chicken, bean sprouts, peanuts, and a tangy tamarind sauce.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628072/lryzn65yuxm5arko0neh.jpg",
        category: "Noodles",
        price: 1149,
      },
    });
    await prisma.products.create({
      data: {
        title: "Vegetarian Ramen",
        description:
          "A comforting bowl of ramen with miso broth, tofu, bok choy, corn, and mushrooms, topped with nori seaweed.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628108/kiohk2l6b7cdvufg7suy.jpg",
        category: "Noodles",
        price: 1099,
      },
    });
    await prisma.products.create({
      data: {
        title: "Beef Lo Mein",
        description:
          "Stir-fried egg noodles with tender slices of beef, broccoli, carrots, and a savory soy-based sauce.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628168/fwpbw5ghmiosajrkxgsg.jpg",
        category: "Noodles",
        price: 1399,
      },
    });
    await prisma.products.create({
      data: {
        title: "Chicken Alfredo",
        description:
          "Fettuccine pasta smothered in creamy Alfredo sauce with grilled chicken breast and a sprinkle of parsley.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628206/s6a44mxkyeekza4pqzqq.jpg",
        category: "Noodles",
        price: 1240,
      },
    });
    await prisma.products.create({
      data: {
        title: "Japanese Udon Soup",
        description:
          "Thick and chewy udon noodles served in a hot dashi broth with green onions, tempura, and fish cake.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628236/kcjhwfez9xmmcowwwuwa.jpg",
        category: "Noodles",
        price: 1195,
      },
    });
    await prisma.products.create({
      data: {
        title: "Shrimp Scampi Linguine",
        description:
          "Linguine pasta tossed in a garlic butter sauce, loaded with succulent shrimp, and garnished with fresh parsley.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628271/dp6vdn6krrdbkhkohhgb.jpg",
        category: "Noodles",
        price: 1499,
      },
    });
    await prisma.products.create({
      data: {
        title: "Singapore Noodles",
        description:
          "Stir-fried vermicelli noodles with curry powder, shrimp, chicken, bell peppers, and bean sprouts, bursting with flavor.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628140/b8ozvmjp2k6fvi5hljii.jpg",
        category: "Noodles",
        price: 1256,
      },
    });

    await prisma.products.create({
      data: {
        title: "Classic Buffalo Wings",
        description:
          "Crispy chicken wings tossed in spicy Buffalo sauce, served with celery sticks and ranch dressing.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628321/lsrfoord4fnsarzp4ty6.jpg",
        category: "Chicken",
        price: 1099,
      },
    });
    await prisma.products.create({
      data: {
        title: "Honey BBQ Wings",
        description:
          "Tender chicken wings coated in sweet and tangy honey barbecue sauce, perfect for barbecue lovers.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628363/ouv0uhgj2hwb5ikmcjjs.jpg",
        category: "Chicken",
        price: 1149,
      },
    });
    await prisma.products.create({
      data: {
        title: "Garlic Parmesan Wings",
        description:
          "Garlic-infused chicken wings topped with grated Parmesan cheese and fresh herbs, a flavorful twist on classic wings.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628393/cfjghm1tmlshhcsg2uif.jpg",
        category: "Chicken",
        price: 1255,
      },
    });
    await prisma.products.create({
      data: {
        title: "Teriyaki Glazed Wings",
        description:
          "Sticky and sweet teriyaki glazed chicken wings, garnished with sesame seeds and green onions.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628423/c7ldfvtsktv2uhg7oqxj.jpg",
        category: "Chicken",
        price: 1259,
      },
    });
    await prisma.products.create({
      data: {
        title: "Lemon Pepper Wings",
        description:
          "Zesty lemon pepper seasoning coats these crispy chicken wings, offering a tangy and peppery kick.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628451/k0n65efwc9mexgmtcwz9.jpg",
        category: "Chicken",
        price: 1595,
      },
    });
    await prisma.products.create({
      data: {
        title: "Spicy Sriracha Wings",
        description:
          "Fiery sriracha-spiced chicken wings with a hint of garlic and a side of cool ranch for balance.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628480/noocf6ob8ngheun07er9.jpg",
        category: "Chicken",
        price: 2595,
      },
    });
    await prisma.products.create({
      data: {
        title: "Korean BBQ Wings",
        description:
          "Sweet and savory Korean barbecue sauce glazed over crispy chicken wings, sprinkled with sesame seeds.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628507/mftxupb2yanjiea3aarq.jpg",
        category: "Chicken",
        price: 1895,
      },
    });
    await prisma.products.create({
      data: {
        title: "Coca-Cola",
        description:
          "The classic cola with a refreshing and bubbly taste, perfect for quenching your thirst.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628615/cv5vpxpqksvsklspugtd.jpg",
        category: "Drinks",
        price: 125,
      },
    });
    await prisma.products.create({
      data: {
        title: "Pepsi",
        description:
          "A rival favorite with a crisp and bold flavor, ideal for a satisfying refreshment.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628656/pqyhaollz2zb1zkn0sxm.jpg",
        category: "Drinks",
        price: 195,
      },
    });
    await prisma.products.create({
      data: {
        title: "Sprite",
        description:
          "A clear and lemon-lime soda that's both tangy and crisp, providing a thirst-quenching experience.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628693/lk2v6qr8ib2mc7wsonus.jpg",
        category: "Drinks",
        price: 295,
      },
    });
    await prisma.products.create({
      data: {
        title: "Root Beer",
        description:
          " A classic root beer soda with a rich and creamy taste, perfect for a nostalgic treat.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628720/oasosjzngbxr9y8hqegp.jpg",
        category: "Drinks",
        price: 255,
      },
    });
    await prisma.products.create({
      data: {
        title: "Mountain Dew",
        description:
          "A citrus-flavored soft drink with a kick of caffeine, offering a unique and bold taste.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628749/xs52rzndg0vo2x4bvxa3.jpg",
        category: "Drinks",
        price: 595,
      },
    });
    await prisma.products.create({
      data: {
        title: "Dr. Pepper",
        description:
          "A distinctive blend of 23 flavors that creates a one-of-a-kind, spicy cherry cola taste.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628777/eve2wdlgsxviee0cg0ma.jpg",
        category: "Drinks",
        price: 395,
      },
    });
    await prisma.products.create({
      data: {
        title: "7UP",
        description:
          "A crisp and clear lemon-lime soda that's both refreshing and versatile for mixing with other beverages.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628808/pndz9yuilvru0gasvsn1.jpg",
        category: "Drinks",
        price: 125,
      },
    });
    await prisma.products.create({
      data: {
        title: "Ginger Ale",
        description:
          "A soothing and effervescent ginger-flavored soda, known for its comforting qualities.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696628842/fcgdwemmnnaosxwer9hr.jpg",
        category: "Drinks",
        price: 495,
      },
    });
    await prisma.products.create({
      data: {
        title: "Caferio Ginger",
        description:
          "A soothing and effervescent ginger-flavored soda, known for its comforting qualities.",
        url:
          "https://res.cloudinary.com/dhldiri5w/image/upload/v1696670410/duvcrb0ck6hycrw8gkde.png",
        category: "Drinks",
        price: 495,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
