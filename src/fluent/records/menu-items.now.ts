import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// South Indian Menu Items with Recipes and Images
export const dosa_plain = Record({
    $id: Now.ID['menu_dosa_plain'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'Plain Dosa',
        description: 'Crispy South Indian crepe made from fermented rice and lentil batter',
        recipe: 'Rice (3 cups), Urad dal (1 cup), Fenugreek seeds (1 tsp), Salt to taste. Soak rice and dal separately for 6 hours. Grind to smooth batter. Ferment overnight. Cook on hot griddle with oil until golden brown.',
        image_url: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400',
        category: 'main_course',
        price: 8.99,
        available: true,
        preparation_time: 15,
        spice_level: 'mild',
        vegetarian: true,
        popular: true
    }
})

export const masala_dosa = Record({
    $id: Now.ID['menu_masala_dosa'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'Masala Dosa',
        description: 'Crispy dosa filled with spiced potato curry',
        recipe: 'Dosa batter, Potatoes (4), Onions (2), Green chilies (3), Mustard seeds, Curry leaves, Turmeric, Salt. Boil potatoes, make tempering with mustard seeds, add onions and spices. Fill dosa with potato masala.',
        image_url: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400',
        category: 'main_course',
        price: 10.99,
        available: true,
        preparation_time: 20,
        spice_level: 'medium',
        vegetarian: true,
        popular: true
    }
})

export const sambar_vada = Record({
    $id: Now.ID['menu_sambar_vada'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'Sambar Vada',
        description: 'Deep-fried lentil donuts soaked in sambar (lentil curry)',
        recipe: 'Urad dal (2 cups), Ginger, Green chilies, Curry leaves, Salt. For sambar: Toor dal, Tamarind, Vegetables, Sambar powder, Turmeric. Grind dal to paste, deep fry vadas. Prepare sambar with vegetables and spices.',
        image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
        category: 'appetizer',
        price: 6.99,
        available: true,
        preparation_time: 10,
        spice_level: 'medium',
        vegetarian: true
    }
})

export const idli_sambar = Record({
    $id: Now.ID['menu_idli_sambar'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'Idli Sambar',
        description: 'Steamed rice cakes served with sambar and coconut chutney',
        recipe: 'Rice (4 cups), Urad dal (1 cup), Fenugreek seeds. Soak, grind, ferment batter. Steam in idli plates. Serve with sambar made from toor dal, vegetables, and coconut chutney with coconut, green chilies, ginger.',
        image_url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400',
        category: 'main_course',
        price: 7.99,
        available: true,
        preparation_time: 12,
        spice_level: 'mild',
        vegetarian: true,
        popular: true
    }
})

export const filter_coffee = Record({
    $id: Now.ID['menu_filter_coffee'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'South Indian Filter Coffee',
        description: 'Traditional South Indian coffee brewed with chicory',
        recipe: 'Coffee powder (2 tbsp), Chicory (1 tsp), Hot water, Fresh milk, Sugar to taste. Brew coffee in filter for 10 minutes. Mix with hot milk and sugar. Serve in traditional tumbler and dabarah.',
        image_url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
        category: 'beverage',
        price: 3.99,
        available: true,
        preparation_time: 5,
        vegetarian: true
    }
})

export const curd_rice = Record({
    $id: Now.ID['menu_curd_rice'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'Curd Rice',
        description: 'Comfort food made with rice, yogurt, and tempered spices',
        recipe: 'Cooked rice (2 cups), Fresh curd (1 cup), Salt, Mustard seeds, Cumin seeds, Green chilies, Ginger, Curry leaves, Coriander leaves. Mix rice with curd, add tempering and garnish.',
        image_url: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400',
        category: 'main_course',
        price: 6.99,
        available: true,
        preparation_time: 15,
        spice_level: 'mild',
        vegetarian: true
    }
})

export const rasam = Record({
    $id: Now.ID['menu_rasam'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'Rasam',
        description: 'Tangy South Indian soup with tamarind, tomatoes, and spices',
        recipe: 'Toor dal (1/2 cup), Tamarind (lemon size), Tomatoes (2), Rasam powder (2 tbsp), Turmeric, Asafoetida, Curry leaves, Coriander leaves. Boil dal, extract tamarind juice, cook with spices and tomatoes.',
        image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
        category: 'appetizer',
        price: 4.99,
        available: true,
        preparation_time: 8,
        spice_level: 'medium',
        vegetarian: true
    }
})

export const payasam = Record({
    $id: Now.ID['menu_payasam'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'Kheer (Payasam)',
        description: 'Traditional South Indian sweet pudding made with rice, milk, and jaggery',
        recipe: 'Rice (1/2 cup), Full cream milk (1 liter), Jaggery (1 cup), Cardamom powder, Ghee, Cashews, Raisins. Cook rice in milk until soft, add jaggery, cardamom. Garnish with fried nuts.',
        image_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
        category: 'dessert',
        price: 5.99,
        available: true,
        preparation_time: 30,
        vegetarian: true,
        popular: true
    }
})

export const buttermilk = Record({
    $id: Now.ID['menu_buttermilk'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'Spiced Buttermilk',
        description: 'Refreshing yogurt-based drink with curry leaves and spices',
        recipe: 'Fresh curd (1 cup), Water (1 cup), Salt, Green chilies (2), Ginger (1 inch), Curry leaves, Mustard seeds, Asafoetida, Coriander leaves. Whisk curd with water, add tempering and spices.',
        image_url: 'https://images.unsplash.com/photo-1553787499-6d5f4ff61dc7?w=400',
        category: 'beverage',
        price: 2.99,
        available: true,
        preparation_time: 5,
        spice_level: 'mild',
        vegetarian: true
    }
})

export const chicken_curry = Record({
    $id: Now.ID['menu_chicken_curry'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'South Indian Chicken Curry',
        description: 'Spicy chicken curry cooked in coconut milk and traditional spices',
        recipe: 'Chicken (1 kg), Coconut milk (400ml), Onions (3), Tomatoes (2), Ginger-garlic paste, Red chili powder, Coriander powder, Turmeric, Garam masala, Curry leaves, Coconut oil. Marinate chicken, sauté with spices, simmer in coconut milk.',
        image_url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
        category: 'main_course',
        price: 14.99,
        available: true,
        preparation_time: 25,
        spice_level: 'spicy',
        vegetarian: false,
        popular: true
    }
})

// Additional popular South Indian items
export const rava_upma = Record({
    $id: Now.ID['menu_rava_upma'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'Rava Upma',
        description: 'Semolina breakfast dish with vegetables and spices',
        recipe: 'Rava/Semolina (1 cup), Mixed vegetables, Mustard seeds, Urad dal, Chana dal, Green chilies, Ginger, Curry leaves, Salt. Roast rava, prepare tempering, add vegetables and water, cook until soft.',
        image_url: 'https://images.unsplash.com/photo-1589097811209-dff6308aa2c9?w=400',
        category: 'main_course',
        price: 5.99,
        available: true,
        preparation_time: 18,
        spice_level: 'mild',
        vegetarian: true
    }
})

export const mysore_pak = Record({
    $id: Now.ID['menu_mysore_pak'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'Mysore Pak',
        description: 'Traditional Karnataka sweet made with gram flour, sugar, and ghee',
        recipe: 'Besan/Gram flour (1 cup), Sugar (1 cup), Pure ghee (1 cup), Water (1/2 cup). Make sugar syrup, roast besan in ghee, mix with syrup, cook until it leaves sides, set in greased plate.',
        image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
        category: 'dessert',
        price: 4.99,
        available: true,
        preparation_time: 25,
        vegetarian: true
    }
})

export const coconut_chutney = Record({
    $id: Now.ID['menu_coconut_chutney'],
    table: 'x_400063_annapoorn_menu_item',
    data: {
        name: 'Coconut Chutney',
        description: 'Fresh coconut chutney with curry leaves tempering',
        recipe: 'Fresh coconut (1 cup), Green chilies (3), Ginger (1 inch), Roasted chana dal (2 tbsp), Salt, Water. Grind all ingredients, temper with mustard seeds, urad dal, curry leaves.',
        image_url: 'https://images.unsplash.com/photo-1596797872008-6f8f9d2a281a?w=400',
        category: 'appetizer',
        price: 3.99,
        available: true,
        preparation_time: 8,
        spice_level: 'mild',
        vegetarian: true
    }
})