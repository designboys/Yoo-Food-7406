export const generatePosts = () => {
  const posts = [
    {
      id: 1,
      title: "Gourmet Burger Perfection",
      description: "Premium artisan burger with fresh ingredients and perfect presentation",
      caption: "🍔 Burger perfection achieved! Fresh ingredients, artisan bun, and that perfect melt. When quality meets craftsmanship, magic happens on your plate. Every bite is a flavor journey! 🔥 #GourmetBurger #FreshIngredients #ArtisanFood #BurgerPerfection #QualityCraftsmanship #FlavorJourney #FoodieLife #PremiumEats",
      image: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751390366574-canva-mH5pdlBUNcc.jpg"
    },
    {
      id: 2,
      title: "Fresh Garden Salad Bowl",
      description: "Vibrant mixed greens with colorful vegetables and premium toppings",
      caption: "🥗 Fresh never looked so good! Crisp greens, vibrant veggies, and premium toppings create the perfect healthy symphony. Nutrition meets deliciousness in every colorful bite! 🌿 #FreshSalad #HealthyEating #VibrantVeggies #NutritionGoals #ColorfulPlate #PremiumToppings #HealthyLifestyle #FreshIngredients",
      image: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751390370848-canva-GoiD8GlJ-_k.jpg"
    },
    {
      id: 3,
      title: "Wood-Fired Pizza Mastery",
      description: "Artisan pizza with melted cheese, fresh toppings and perfectly charred crust",
      caption: "🍕 Pizza perfection from our wood-fired oven! Crispy crust, premium toppings, and that authentic smoky flavor. Each slice is a masterpiece of Italian tradition meets modern craft! 🔥 #WoodFiredPizza #ArtisanPizza #PremiumToppings #ItalianTradition #CrispyCrust #SmokyFlavor #PizzaMastery #AuthenticTaste",
      image: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751390375405-canva-ERxpQoNDpdg.jpg"
    },
    {
      id: 4,
      title: "Healthy Breakfast Bowl",
      description: "Nutritious acai bowl topped with fresh berries, granola and coconut flakes",
      caption: "🌅 Start your day right with our superfood bowl! Fresh berries, crunchy granola, and coconut flakes create the perfect morning fuel. Power up with nature's best! ☀️ #BreakfastBowl #SuperfoodBowl #FreshBerries #HealthyStart #MorningFuel #AcaiBowl #NutritiousToppings #PowerUp",
      image: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751390382945-canva-COKBnUUoJdY.jpg"
    },
    {
      id: 5,
      title: "Classic Spaghetti Excellence",
      description: "Traditional spaghetti with rich tomato sauce, fresh basil and parmesan",
      caption: "🍝 Pasta perfection on your plate! Classic spaghetti with rich tomato sauce, fresh basil, and aged parmesan. Simple ingredients, extraordinary flavor! 🇮🇹 #ClassicPasta #TomatoSauce #FreshBasil #AgedParmesan #ItalianTradition #SimpleIngredients #PastaPerfection #ComfortFood",
      image: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751390389008-canva-U8ZAT2BgIm8.jpg"
    },
    {
      id: 6,
      title: "Golden Fried Chicken",
      description: "Crispy golden fried chicken pieces with perfect seasoning and herbs",
      caption: "🐔 Crispy perfection served fresh! Golden-brown chicken seasoned to perfection with aromatic herbs and secret spices. Every bite delivers that satisfying crunch and juicy flavor! 🔥 #CrispyChicken #GoldenBrown #PerfectlyCooked #AromaticHerbs #SecretSpices #SatisfyingCrunch #JuicyFlavor #ChickenLovers",
      image: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751398224524-canva-jHNIzyJwlPM.jpg"
    },
    {
      id: 7,
      title: "Tropical Mango Smoothie",
      description: "Refreshing mango smoothie with tropical fruits and coconut garnish",
      caption: "🥭 Tropical paradise in a glass! Fresh mango, tropical fruits, and coconut create the perfect refreshing escape. Taste the sunshine with every sip! 🌴 #MangoSmoothie #TropicalFruits #CoconutBliss #RefreshingDrink #TropicalParadise #TasteSunshine #HealthyTreats #FruitSmoothie",
      image: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751398229397-canva-OxeRE_DfTBs.jpg"
    },
    {
      id: 8,
      title: "Fresh Vegetable Medley",
      description: "Colorful array of fresh vegetables including carrots, peppers and greens",
      caption: "🥕 Nature's rainbow on your plate! Farm-fresh vegetables bursting with color, nutrients, and incredible flavor. Eating healthy never looked so beautiful! 🌈 #VeggieRainbow #FarmFresh #VibrantColors #HealthyEating #NutrientPacked #BeautifulFood #NaturesGifts #ColorfulPlate",
      image: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751398234893-canva-e-hYpm3shCo.jpg"
    },
    {
      id: 9,
      title: "Rich Chocolate Dessert",
      description: "Decadent chocolate cake with rich frosting and elegant presentation",
      caption: "🍫 Pure chocolate indulgence! Rich, velvety chocolate cake with decadent frosting. This chocolate masterpiece is the perfect ending to any perfect meal. Sweet dreams are made of this! ✨ #ChocolateIndulgence #RichChocolate #DecadentFrosting #ChocolateCake #PerfectEnding #SweetDreams #ChocolateLovers #PureBliss",
      image: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751398244880-canva-5u8-yNjN9Mw.jpg"
    },
    {
      id: 10,
      title: "Fresh Artisan Bread",
      description: "Freshly baked artisan bread loaves with golden crusts and rustic charm",
      caption: "🥖 Fresh from the oven perfection! Artisan breads baked to golden-brown excellence with that perfect rustic charm. The aroma alone will transport you to a traditional bakery! 🇫🇷 #ArtisanBread #FreshFromOven #GoldenBrown #RusticCharm #TraditionalBaking #CrustyGoodness #HandcraftedDaily #BreadLovers",
      image: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751398254278-canva-ILQBXuuEqJg.jpg"
    },
    {
      id: 11,
      title: "Perfect Grilled Steak",
      description: "Prime ribeye steak grilled to perfection with grill marks and herbs",
      caption: "🥩 Steak night done right! Prime ribeye, perfectly grilled with beautiful char marks, and fresh herbs. When quality meets skill, every bite is a celebration of flavor! 🔥 #PrimeRibeye #PerfectlyGrilled #GrillMarks #FreshHerbs #QualityMeetsSkill #FlavorCelebration #SteakNight #PremiumCut",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=600&fit=crop"
    },
    {
      id: 12,
      title: "Premium Sushi Rolls",
      description: "Fresh sushi rolls with salmon, avocado and cucumber, artistically plated",
      caption: "🍣 Sushi artistry at its finest! Fresh salmon, creamy avocado, and crisp cucumber rolled to perfection. Every roll is a work of art that delivers authentic Japanese flavors! 🎌 #SushiArtistry #FreshSalmon #CreamyAvocado #CrispCucumber #AuthenticJapanese #WorkOfArt #PremiumSushi #JapaneseCuisine",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=600&fit=crop"
    },
    {
      id: 13,
      title: "Artisan Coffee Art",
      description: "Perfectly crafted cappuccino with intricate latte art and premium beans",
      caption: "☕ Coffee culture at its peak! Expertly crafted cappuccino with beautiful latte art, made from premium beans. Wake up to perfection in every cup! 🎨 #CoffeeCulture #ExpertlyCrafted #PremiumBeans #LatteArt #Cappuccino #CoffeeExperience #WakeUpToPerfection #ArtisanCoffee",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=600&fit=crop"
    },
    {
      id: 14,
      title: "Ocean Fresh Seafood",
      description: "Grilled salmon fillet with seasonal vegetables and lemon garnish",
      caption: "🐟 Ocean to table perfection! Fresh grilled salmon with seasonal vegetables and bright lemon. Taste the freshness of the sea in every flaky, tender bite! 🌊 #FreshSeafood #GrilledSalmon #SeasonalVegetables #BrightLemon #OceanToTable #TasteTheSea #FlakeyTender #SeafoodPerfection",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=600&fit=crop"
    },
    {
      id: 15,
      title: "Authentic Street Tacos",
      description: "Traditional street tacos with seasoned meat, onions, cilantro and lime",
      caption: "🌮 Authentic street food perfection! Traditional tacos with perfectly seasoned meat, fresh onions, cilantro, and a squeeze of lime. Fiesta flavors in every bite! 🎉 #AuthenticTacos #StreetFood #SeasonedMeat #FreshOnions #Cilantro #SqueezeOfLime #FiestaFlavors #MexicanTradition",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=600&fit=crop"
    },
    {
      id: 16,
      title: "Farm Fresh Vegetables",
      description: "Assorted fresh vegetables including tomatoes, peppers, and leafy greens",
      caption: "🥕 Farm to table at its finest! Locally sourced tomatoes, colorful peppers, and leafy greens, picked at peak freshness. Supporting local farmers while delivering incredible flavor! 🚜 #FarmToTable #LocallySourced #PeakFreshness #ColorfulPeppers #LeafyGreens #SupportLocal #IncredibleFlavor #LocalFarmers",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=600&fit=crop"
    },
    {
      id: 17,
      title: "Gourmet Cheese Selection",
      description: "Curated cheese board with aged varieties, crackers, grapes and nuts",
      caption: "🧀 Cheese board perfection! Curated selection of aged cheeses, artisan crackers, fresh grapes, and premium nuts. A symphony of flavors and textures! 🍇 #GourmetCheese #CuratedSelection #AgedCheeses #ArtisanCrackers #FreshGrapes #PremiumNuts #SymphonyOfFlavors #CheeseBoard",
      image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=500&h=600&fit=crop"
    },
    {
      id: 18,
      title: "Craft Cocktail Creation",
      description: "Expertly mixed whiskey cocktail with orange peel garnish and ice sphere",
      caption: "🥃 Craft cocktail mastery! Premium whiskey, expertly mixed with fresh orange peel garnish and a perfect ice sphere. Sophistication in every sip! 🥂 #CraftCocktail #PremiumWhiskey #ExpertMixing #OrangePeel #PerfectIce #Sophistication #CocktailArt #MixologyMaster",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=600&fit=crop"
    },
    {
      id: 19,
      title: "Vibrant Smoothie Bowl",
      description: "Purple acai smoothie bowl topped with berries, granola and coconut",
      caption: "🫐 Smoothie bowl paradise! Vibrant purple acai base topped with fresh berries, crunchy granola, and coconut flakes. Nutrition never looked so beautiful! 🌈 #SmoothieBowl #VibrantPurple #AcaiBase #FreshBerries #CrunchyGranola #CoconutFlakes #NutritionGoals #BeautifulFood",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=500&h=600&fit=crop"
    },
    {
      id: 20,
      title: "Smoky BBQ Ribs",
      description: "Slow-cooked barbecue ribs with smoky glaze and traditional sides",
      caption: "🔥 Barbecue perfection! Slow-cooked ribs with our signature smoky glaze, fall-off-the-bone tender. Traditional BBQ at its finest! 🥩 #BBQRibs #SlowCooked #SmokyGlaze #FallOffTheBone #TraditionalBBQ #BBQPerfection #SmokedMeats #TenderRibs",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500&h=600&fit=crop"
    },
    {
      id: 21,
      title: "Fine Dining Artistry",
      description: "Elegantly plated gourmet dish with artistic presentation and garnishes",
      caption: "🍽️ Fine dining redefined! Artistically plated gourmet creation with exquisite garnishes and perfect presentation. Every element tells a culinary story! ⭐ #FineDining #ArtisticPlating #GourmetCreation #ExquisiteGarnishes #PerfectPresentation #CulinaryStory #GastronomyArt #MichelinWorthy",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=600&fit=crop"
    },
    {
      id: 22,
      title: "Authentic Ramen Bowl",
      description: "Traditional ramen with rich pork broth, soft egg, and fresh toppings",
      caption: "🍜 Ramen perfection in every bowl! Rich pork broth, perfectly soft egg, fresh scallions, and tender noodles. Authentic Japanese comfort food that warms the soul! 🏮 #AuthenticRamen #RichPorkBroth #SoftEgg #FreshScallions #TenderNoodles #JapaneseComfortFood #WarmTheSoul #RamenPerfection",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=600&fit=crop"
    },
    {
      id: 23,
      title: "Berry Fresh Tart",
      description: "Beautiful fruit tart with pastry cream and assorted fresh berries",
      caption: "🥧 Seasonal perfection on a plate! Fresh mixed berries, silky pastry cream, and buttery crust create the ultimate fruit tart experience. Sweet seasonal celebration! 🍓 #SeasonalTart #MixedBerries #PastryCream #ButteryTrust #FruitTart #SeasonalCelebration #SweetPerfection #ArtisanPastry",
      image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=500&h=600&fit=crop"
    },
    {
      id: 24,
      title: "Weekend Brunch Spread",
      description: "Elegant brunch with pancakes, eggs benedict, and fresh fruit",
      caption: "🥞 Brunch goals achieved! Fluffy pancakes, perfectly crafted eggs benedict, and fresh seasonal fruit make weekend mornings extraordinary. This is how you start the day right! ☀️ #BrunchGoals #FluffyPancakes #EggsBenedict #FreshFruit #WeekendMornings #StartTheDay #BrunchSpecial #WeekendVibes",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=600&fit=crop"
    },
    {
      id: 25,
      title: "Classic Ice Cream Sundae",
      description: "Artisanal vanilla ice cream sundae with chocolate sauce and cherry",
      caption: "🍨 Sundae perfection! Artisanal vanilla ice cream with rich chocolate sauce, whipped cream, and a classic cherry on top. Every spoonful is pure nostalgia! 🌈 #SundayPerfection #ArtisanalVanilla #RichChocolate #WhippedCream #ClassicCherry #PureNostalgia #IceCreamLovers #SundayTreats",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=600&fit=crop"
    }
  ];

  // Shuffle the posts array using Fisher-Yates algorithm
  const shuffledPosts = [...posts];
  for (let i = shuffledPosts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPosts[i], shuffledPosts[j]] = [shuffledPosts[j], shuffledPosts[i]];
  }

  return shuffledPosts;
};