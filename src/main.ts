/**
 * Chiya and Sukoon - Main Application Controller (Vanilla TypeScript/JavaScript)
 * Zero React dependencies runtime, fully modular, fast, and responsive.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'chiya' | 'coffee' | 'breakfast' | 'momo' | 'desserts' | 'bakery';
  categoryLabel: string;
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  isSpecial?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone?: string;
  date: string;
  time: string;
  guests: string;
  area: string;
  preferences: string;
}

// Full Menu Database with high quality images and descriptions
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'himalayan-herbal-tea',
    name: 'Himalayan Herbal Tea',
    category: 'chiya',
    categoryLabel: 'Chiya & Tea',
    price: 4.50,
    rating: 4.8,
    reviewsCount: 128,
    badge: 'Vegan',
    badgeColor: '#496800',
    description: 'A soothing blend of mountain herbs, ginger, and honey. Perfect for a chilly afternoon.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzvI3CohUuN01B6sKUsaM451fYcuw9bY6Shi5kqWgXtT-gVA0z5JtIaXU0Eylcz6se1WUjNUKtQKgCEct0h6_13ar7GQ2MEmnl7FPdWkQcPD3Zi8wRiXjgATNYvzYguV-CwKm2q2pY_40wVk_zg5YN2kAFNm1iNlmRiJnR3UvaS_Oklo52Zu9RSgjlmWxsaiyE79xPto1mOihHOdddViAabiHE19a_WLb5JxNFTIST8OvjSlHMtoo7'
  },
  {
    id: 'matka-chiya',
    name: 'Matka Chiya',
    category: 'chiya',
    categoryLabel: 'Chiya & Tea',
    price: 3.50,
    rating: 5.0,
    reviewsCount: 245,
    badge: 'Signature',
    badgeColor: '#72564c',
    description: 'Authentic milk tea brewed with cardamom and served in a traditional clay cup for an earthy flavor.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp2i-xldDEBrsBX_uyzQIj_CWBXGn8I5Wn1xRksWjST1VxayhlWEljT3dOg_qPNaexH4NeSRkEJIxAZf72McQSkSU33OcLX4pI8Av9HznIfO23hVSO1egoy-WSA6m9Dg1gCB6oVKshKIavdJzI8klO3KVFMMhqK4PszB3imvuTrlwDW8QTof5B7PDOvFxSN8oeOSK7Ssdzh7G6LHoADFydDHgJCNcSdNCO2SDDnzCqYg-e3aP5jaZa'
  },
  {
    id: 'classic-nepali-chiya',
    name: 'Classic Nepali Chiya',
    category: 'chiya',
    categoryLabel: 'Chiya & Tea',
    price: 4.50,
    rating: 4.9,
    reviewsCount: 310,
    badge: 'Popular',
    badgeColor: '#8d6e63',
    description: 'Traditional spiced milk tea with fresh crushed cardamom, cloves, and ginger.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA97NuNuqOjmRQy8Umel4VnA1JMSuasChpvyVHmxGJRhrMuSiptxTAsptGdcceAGHnM2WUNeCInSh_1m5MyuAmCqEwe4EXUb1pxRqVLl-UA2S9rFTsIjLd5IzVX_AJpdefuGdlh5Gom96beo-L_-TkXwTeaIRDF00HYGt5FAnNx4zh7MpUCsLZd-gSZAE1Eh_wygKYG8WvSWDe9KcqWtU25HzvAXRnYv_COhm_p3IwR0aiY46aLF_Kf'
  },
  {
    id: 'signature-masala-chiya',
    name: 'Signature Masala Chiya',
    category: 'chiya',
    categoryLabel: 'Chiya & Tea',
    price: 5.00,
    rating: 4.9,
    reviewsCount: 412,
    badge: 'Chef Special',
    badgeColor: '#72564c',
    description: 'Slow-simmered orthodox tea with whole spices, cinnamon bark, star anise, and organic whole milk.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvOGZwhFdQEHEGbsIXXyauZ-sZwDUirXJEgf4yGVD-6thTqTzjDf6Mq2uJltuCIPgotvhexIKq3mtFfni6Bjt3a6LWb2E8ZF30lyPET8PgEc-wFvh0ZTGYDNI_Eg7QYQAvkTodg-4JcaPruX0pbakjjNI4poAwyguLFhQyI3nufeiO6kDi8RiVHs2Oz6Y0xZOloFGcuuHPoc_-cI1WLkTeEDPfpMCG8ZwWV3VVVv-Dke5zuBchV2KY'
  },
  {
    id: 'refreshing-iced-coffee',
    name: 'Refreshing Iced Coffee',
    category: 'coffee',
    categoryLabel: 'Coffee',
    price: 6.50,
    rating: 4.9,
    reviewsCount: 198,
    badge: 'Chilled',
    badgeColor: '#78756d',
    description: 'House blend espresso over crystal ice with silky oat milk and natural vanilla.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbUWFDBz5y8Sx3LHX7IzaCAvspgUyldgFw_xZInSQB0Cm4SbgODZt3LMwc2ckD4IGTqlwUKJqaLCdUaSX5YzZC3_C7ypa6yMMlHdaxmMzbJcg4JH80HU-iqK9vqBGcl46C8bZIlC6OLP40TRj81UA1LF-Clig4-J7SsTf8hhyjH_L0E2O88paJ6OeaO0AVcHKY01yHISzVPH9ToWd9Q3r2Y-68ekBIgBHZl9N7R3UPucf2a9-C3fU_'
  },
  {
    id: 'artisan-cappuccino',
    name: 'Artisan Cappuccino',
    category: 'coffee',
    categoryLabel: 'Coffee',
    price: 5.25,
    rating: 4.8,
    reviewsCount: 160,
    description: 'Locally roasted beans pulled into double espresso with micro-foam latte art.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzni5xaBpqGcuHXHHh_UloG8Rh0MSC8akoMEC0E1qDfCmEVne3cwS3UbSrG94zn-pSyzeL8Jy2yIV1lmstAVKp-CpaQ9eEszOSRbveZ9sHSiFKdU8ltKZsN3GgeQO9SjVKn49Kde1Xy2kmyr15hJXpmHUZGWGAszOitmgdIoL-vPjVhlk6VzVfgERLmlcx9Bb-4NqIvKBEcUJtU4V_0K3eK4Pk-HODDrjQNocMybzHR7NikjO-eATG'
  },
  {
    id: 'fluffy-golden-pancakes',
    name: 'Fluffy Golden Pancakes',
    category: 'breakfast',
    categoryLabel: 'Breakfast',
    price: 12.50,
    rating: 4.9,
    reviewsCount: 320,
    badge: 'Popular',
    badgeColor: '#8d6e63',
    description: 'Classic buttermilk pancakes stacked high, dripping in amber maple syrup and cultured butter.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALemeENfGNhhq8a5eRYIubXnkycqtp2A_Xo9MmEPrKqY3z2Kc6cJ7UoWF9qwQaJe76WhqawRLQL3Xes2umfrjNltZ1cDtrYm0LG7RqGWbjoGRjzr_JmWfJ-z_ja1IZCG9AnDZQ-HwHStq-DcavhM0hx5RX13MUCjPCWj3wEsExXexhHmeg2dsUvadT9sjZt_fUmIljXUUNxcr-RizOk-n4CH1xc7KTxdGY9u5psIxq8tegT3gX89MQ'
  },
  {
    id: 'gourmet-avocado-toast',
    name: 'Gourmet Avocado Toast',
    category: 'breakfast',
    categoryLabel: 'Breakfast',
    price: 14.00,
    rating: 4.8,
    reviewsCount: 275,
    badge: 'Vegetarian',
    badgeColor: '#496800',
    description: 'Artisanal sourdough, smashed avocado, poached egg, cherry tomatoes, and microgreens.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxoOWM6VjAMziN7GaXXFoz4rSH6e8CE7ZMULnumNpNKBmFWoqbCm30QKCGTtjrmvmw5rLQSSJK26gNEzkLsAUBUM8-nM8ENXbGX0HCuohRJJhTpqRmwPzSIZQplaRPHJLbVd4lxKsPGPiWAdBayNAbRblDC7edWaq8JjPkaQl3XqZRc14jme7k03HBskON3zlOB1zrwmok2pfg0DvPazuagbT6cRCV2Yq4t498sgOxzTff-fOvMx2K'
  },
  {
    id: 'sukoon-club-sandwich',
    name: 'Sukoon Club Sandwich',
    category: 'breakfast',
    categoryLabel: 'Breakfast',
    price: 12.00,
    rating: 4.7,
    reviewsCount: 89,
    description: 'Triple-decker sandwich with roasted turkey, crisp bacon, lettuce, tomato, and house herb mayo.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2kPJVQioC4DSJouwwk6S1x5LJAt72wqBFYtMriEPopgykWCxgD-kMDEXPxlYj9B-3UwdFeQbjSiFX_zYa6o_tp7uhl8ETaDFpqsUmyJkBrYl94vol4p2tQHXihtHSgXwat0CDlY1WX_yuTEVYirPtvhLZhQagcDDQKeigoRsSYcfs5MpjypXasas82MtowlQjtXSMYlIaqeuruwe3p9_uHBqEgZNfjcVjLvfP1hIwjnO2HP-1-nFH'
  },
  {
    id: 'steam-momo-chicken',
    name: 'Steam Momo (Chicken)',
    category: 'momo',
    categoryLabel: 'Momo',
    price: 12.00,
    rating: 4.8,
    reviewsCount: 380,
    badge: 'Vegan Option',
    badgeColor: '#496800',
    description: 'Hand-wrapped dumplings with seasoned chicken, Himalayan spices, and tangy house sesame chutney.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqv1To8UlaK9ump9xi-FRbeXg2EhyTBxfBJumY_gkH_rhZls-rB1beMp7X_38dfPLEBQc86EeJL7-sxQ_zO3E_53vLXduZwnH0D-drMfK461StJ8N84I-dp_LNgHRS81MuBc3MBh8dYR4Vw_M2nnVH4zhepZYc74U9B7mNovnPCIh_df-FojzIYFQ--_KvTbG-5AvgXzVZoZF4Y4Y2rP2cTTAmVYI_FT8ksT3zy-hS8aJ42y6NiLhN'
  },
  {
    id: 'organic-veggie-momo',
    name: 'Bamboo Steamer Veggie Momo',
    category: 'momo',
    categoryLabel: 'Momo',
    price: 11.50,
    rating: 4.9,
    reviewsCount: 220,
    badge: 'Vegan',
    badgeColor: '#496800',
    description: 'Fresh minced mountain vegetables, shiitake mushrooms, herbs, steamed in bamboo baskets.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7ZkGC4HWZnXRnCxHg4fD4rMlP8YEaFgy2c-Uu6zBnU2I45uARt2Q1xFoPH7Mf8FVKulPuQoh4QgYp79a6fAZDmWPgJHBR6-b3SSapTCeR5cYsssPJsI-LVbJKMzx7M8AdrAD1C3lmehbrIDgKIebmpwpoNiQeG1lR4zI6iOmGTiFR-0uprzXe6fYcyfcRfmp49ht35qCYmN06ov0g4npCgpWmE2G39WyLLy8XCc_mLgGakrTceqXq'
  },
  {
    id: 'classic-cheesecake',
    name: 'Classic Cheesecake',
    category: 'desserts',
    categoryLabel: 'Desserts',
    price: 6.50,
    rating: 4.8,
    reviewsCount: 156,
    badge: 'Vegetarian',
    badgeColor: '#496800',
    description: 'Rich, creamy New York style cheesecake on a graham cracker crust, topped with seasonal berry compote.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbrEBzx-h5QOzlLcCsMUL8exGEBDnHN8geumEls5hPsrRfZdbNNlj-RiFskvaOzptJjDYWV6Y_4DfXq85ekH9aI4qqlkfH9ajuTPpMqcJyANmXfAJz5H7iFfIH9PtaQJqrmqJQiXgg3ilxxm_E0eYvOLk28U8UDyvfK1xRZJCY-X32VYDrtWxSUdLnxrQb0GNoVPOGyxMw8HCTPPVYieGzXTzyQmCvpJZ-_7v9bDzltbz_RLf5CG3l'
  },
  {
    id: 'warm-fudge-brownie',
    name: 'Warm Fudge Brownie',
    category: 'desserts',
    categoryLabel: 'Desserts',
    price: 8.00,
    rating: 4.9,
    reviewsCount: 195,
    badge: 'Indulgent',
    badgeColor: '#72564c',
    description: 'Warm, gooey chocolate brownie served with a scoop of vanilla bean ice cream.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQGDq_c3AS0mXagi-cPvoDLN476-JDmdPQDZi2v80C6jIYsNby41MYdfwhCxtVNAgvOUkHxtVRm41OGjMGhjKenb9mCSMVumXmmGx_itWv46QIjvaXg3p0X3OO9ImdhvLwP_VzEg_ktXibk01I6qXsEFjVkj4lcL0WMpfhY4Y0VxQNs_FnnpVL6NfGDRs8nwWDDdmyipq8nQu2zML_MAYfCgMMcI3S3DCi7G9sy1E0L_f40jEOCfOH'
  },
  {
    id: 'morning-pastries-spread',
    name: 'Morning Pastries & Croissants',
    category: 'bakery',
    categoryLabel: 'Bakery',
    price: 9.50,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Fresh Daily',
    badgeColor: '#8d6e63',
    description: 'Flaky butter croissants, fruit Danish, and yogurt parfait with seasonal berries.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-cLadTyWLaXeYXQ2vVJrPj9R7JsYTKGsWFCSFQ7Hq4CCocVIDR9vmFEx8ojsADr-IfcD3h94gWK99Dx4MFuAH_hQfEeDsNzCmY-3BzDt_C6PUK3G6Bci-PvKlqzf_Ibl-441SLKIzZ-NgoVFuPwn1Q4Yz58oHTxvaUTbKv50wpvzwg0LFyrlJHu_YqdnLQerhd4gbxgv4k_bD1RKn7w4c61_K4O-XcgwJqDoyJupR-nnT_XOGrlER'
  }
];

// Initial seed cart for demo matching the screen prompt
const DEFAULT_CART: CartItem[] = [
  {
    item: MENU_ITEMS.find(i => i.id === 'fluffy-golden-pancakes')!,
    quantity: 2
  },
  {
    item: MENU_ITEMS.find(i => i.id === 'gourmet-avocado-toast')!,
    quantity: 1
  },
  {
    item: MENU_ITEMS.find(i => i.id === 'refreshing-iced-coffee')!,
    quantity: 2
  }
];

// Cart Store
class CartStore {
  private items: CartItem[] = [];
  private listeners: Array<() => void> = [];
  public promoCode: string = '';
  public discountRate: number = 0;
  public orderType: 'delivery' | 'pickup' | 'dinein' = 'delivery';

  constructor() {
    const saved = localStorage.getItem('chiya_cart');
    if (saved) {
      try {
        this.items = JSON.parse(saved);
      } catch (e) {
        this.items = [...DEFAULT_CART];
      }
    } else {
      this.items = [...DEFAULT_CART];
    }
  }

  public getItems(): CartItem[] {
    return this.items;
  }

  public getTotalCount(): number {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }

  public getSubtotal(): number {
    return this.items.reduce((sum, i) => sum + (i.item.price * i.quantity), 0);
  }

  public getDeliveryFee(): number {
    if (this.orderType === 'pickup' || this.orderType === 'dinein' || this.items.length === 0) return 0;
    if (this.promoCode.toUpperCase() === 'FREESHIP') return 0;
    return 4.50;
  }

  public getTaxes(): number {
    const subtotal = this.getSubtotal();
    return +(subtotal * 0.08).toFixed(2);
  }

  public getDiscountAmount(): number {
    return +(this.getSubtotal() * this.discountRate).toFixed(2);
  }

  public getTotal(): number {
    const sub = this.getSubtotal();
    if (sub === 0) return 0;
    const fee = this.getDeliveryFee();
    const taxes = this.getTaxes();
    const discount = this.getDiscountAmount();
    return Math.max(0, +(sub + fee + taxes - discount).toFixed(2));
  }

  public addItem(item: MenuItem, qty: number = 1): void {
    const existing = this.items.find(i => i.item.id === item.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      this.items.push({ item, quantity: qty });
    }
    this.saveAndNotify();
  }

  public updateQuantity(itemId: string, delta: number): void {
    const item = this.items.find(i => i.item.id === itemId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(itemId);
    } else {
      this.saveAndNotify();
    }
  }

  public removeItem(itemId: string): void {
    this.items = this.items.filter(i => i.item.id !== itemId);
    this.saveAndNotify();
  }

  public clear(): void {
    this.items = [];
    this.promoCode = '';
    this.discountRate = 0;
    this.saveAndNotify();
  }

  public applyPromo(code: string): { success: boolean; message: string } {
    const clean = code.trim().toUpperCase();
    if (clean === 'SUKOON10') {
      this.promoCode = clean;
      this.discountRate = 0.10;
      this.saveAndNotify();
      return { success: true, message: '10% Sukoon discount applied!' };
    } else if (clean === 'FREESHIP') {
      this.promoCode = clean;
      this.discountRate = 0;
      this.saveAndNotify();
      return { success: true, message: 'Free delivery fee coupon applied!' };
    }
    return { success: false, message: 'Invalid promo code. Try "SUKOON10".' };
  }

  public subscribe(fn: () => void): () => void {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  private saveAndNotify(): void {
    localStorage.setItem('chiya_cart', JSON.stringify(this.items));
    this.listeners.forEach(fn => fn());
  }
}

export const cart = new CartStore();

// Toast notification helper
export function showToast(message: string, icon: string = 'check_circle'): void {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-enter bg-[#1b1c1a] text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-3 text-sm font-medium border border-white/10 pointer-events-auto transition-all duration-300';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[#c8f17a] text-[20px]">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Router & View Management
export class AppRouter {
  private currentRoute: string = 'home';

  constructor() {
    window.addEventListener('hashchange', () => this.handleHashChange());
    this.handleHashChange();
  }

  public navigate(route: string): void {
    window.location.hash = route;
  }

  private handleHashChange(): void {
    const hash = window.location.hash.replace('#', '') || 'home';
    this.currentRoute = hash;
    this.renderActiveView(hash);
    this.updateActiveNavLinks(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private renderActiveView(route: string): void {
    const views = document.querySelectorAll('.app-view');
    views.forEach(v => {
      v.classList.add('hidden');
    });

    const targetView = document.getElementById(`view-${route}`);
    if (targetView) {
      targetView.classList.remove('hidden');
    } else {
      const fallback = document.getElementById('view-home');
      if (fallback) fallback.classList.remove('hidden');
    }

    if (route === 'menu') {
      renderMenuGrid();
    } else if (route === 'cart') {
      renderCartPage();
    }
  }

  private updateActiveNavLinks(route: string): void {
    document.querySelectorAll('.nav-link').forEach(link => {
      const target = link.getAttribute('data-route');
      if (target === route) {
        link.classList.add('text-primary', 'dark:text-primary-fixed', 'border-b-2', 'border-primary', 'font-semibold');
        link.classList.remove('text-on-surface-variant');
      } else {
        link.classList.remove('text-primary', 'dark:text-primary-fixed', 'border-b-2', 'border-primary', 'font-semibold');
        link.classList.add('text-on-surface-variant');
      }
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      const target = link.getAttribute('data-route');
      if (target === route) {
        link.classList.add('bg-primary/10', 'text-primary', 'font-bold');
      } else {
        link.classList.remove('bg-primary/10', 'text-primary', 'font-bold');
      }
    });
  }
}

let router: AppRouter;
let activeCategory: string = 'all';
let menuSearchQuery: string = '';

// Quick Cart Drawer Management
export function toggleCartDrawer(open?: boolean): void {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (!drawer || !backdrop) return;

  const isOpen = !drawer.classList.contains('translate-x-full');
  const shouldOpen = open !== undefined ? open : !isOpen;

  if (shouldOpen) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
    renderQuickCartDrawer();
  } else {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100');
  }
}

// Mobile Menu Drawer
export function toggleMobileMenu(open?: boolean): void {
  const drawer = document.getElementById('mobile-menu-drawer');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  if (!drawer || !backdrop) return;

  const isOpen = !drawer.classList.contains('-translate-x-full');
  const shouldOpen = open !== undefined ? open : !isOpen;

  if (shouldOpen) {
    drawer.classList.remove('-translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
  } else {
    drawer.classList.add('-translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100');
  }
}

// Render Menu Cards
export function renderMenuGrid(): void {
  const container = document.getElementById('menu-grid-container');
  if (!container) return;

  const filtered = MENU_ITEMS.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = menuSearchQuery === '' ||
      item.name.toLowerCase().includes(menuSearchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(menuSearchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <span class="material-symbols-outlined text-[48px] text-[#827470] mb-3">local_cafe</span>
        <h3 class="font-headline text-2xl text-primary font-bold mb-1">No items found</h3>
        <p class="text-on-surface-variant">Try selecting a different category or search term.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const stars = Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(item.rating)) {
        return `<span class="material-symbols-outlined text-amber-500 text-sm" style="font-variation-settings: 'FILL' 1;">star</span>`;
      } else if (i < item.rating) {
        return `<span class="material-symbols-outlined text-amber-500 text-sm" style="font-variation-settings: 'FILL' 1;">star_half</span>`;
      }
      return `<span class="material-symbols-outlined text-amber-500 text-sm">star_border</span>`;
    }).join('');

    const badgeHtml = item.badge ? `
      <div class="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm text-secondary font-semibold text-xs px-3 py-1 rounded-full shadow-sm border border-secondary/20">
        ${item.badge}
      </div>
    ` : '';

    return `
      <div class="bg-surface-container-lowest rounded-[24px] soft-shadow overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 group border border-outline-variant/20">
        <div class="h-64 relative overflow-hidden bg-surface-container-low">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          ${badgeHtml}
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-2 gap-2">
            <h3 class="font-headline text-xl font-bold text-primary">${item.name}</h3>
            <span class="font-headline text-xl font-bold text-[#75584d] shrink-0">$${item.price.toFixed(2)}</span>
          </div>
          <div class="flex items-center gap-1 mb-3">
            <div class="flex">${stars}</div>
            <span class="text-xs text-on-surface-variant ml-1 font-medium">(${item.reviewsCount})</span>
          </div>
          <p class="text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">${item.description}</p>
          <button 
            data-item-id="${item.id}"
            class="add-to-cart-btn w-full bg-primary text-on-primary font-semibold text-sm py-3 rounded-full flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-200 shadow-sm active:scale-98"
          >
            <span class="material-symbols-outlined text-[18px]">add</span> Add to Cart
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Attach button click handlers
  container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = (e.currentTarget as HTMLElement).getAttribute('data-item-id');
      const item = MENU_ITEMS.find(m => m.id === id);
      if (item) {
        cart.addItem(item, 1);
        showToast(`Added "${item.name}" to your cart!`);
      }
    });
  });
}

// Render Cart Page Screen
export function renderCartPage(): void {
  const listContainer = document.getElementById('cart-page-items');
  const summarySubtotal = document.getElementById('cart-page-subtotal');
  const summaryDelivery = document.getElementById('cart-page-delivery');
  const summaryTaxes = document.getElementById('cart-page-taxes');
  const summaryTotal = document.getElementById('cart-page-total');
  const summaryDiscountRow = document.getElementById('cart-page-discount-row');
  const summaryDiscount = document.getElementById('cart-page-discount');
  const emptyState = document.getElementById('cart-page-empty');
  const fullContent = document.getElementById('cart-page-content');

  if (!listContainer) return;

  const items = cart.getItems();

  if (items.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (fullContent) fullContent.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (fullContent) fullContent.classList.remove('hidden');

  listContainer.innerHTML = items.map(ci => `
    <div class="bg-surface-container-lowest rounded-[24px] p-6 soft-shadow flex flex-col sm:flex-row gap-6 items-center border border-outline-variant/20 transition-all">
      <img src="${ci.item.image}" alt="${ci.item.name}" class="w-24 h-24 rounded-2xl object-cover shadow-sm shrink-0" />
      <div class="flex-grow text-center sm:text-left">
        <h3 class="font-headline text-xl font-bold text-on-surface mb-1">${ci.item.name}</h3>
        <p class="text-sm text-on-surface-variant mb-2">${ci.item.description.slice(0, 50)}...</p>
        <p class="text-base font-bold text-primary">$${(ci.item.price * ci.quantity).toFixed(2)} <span class="text-xs text-on-surface-variant font-normal">($${ci.item.price.toFixed(2)} each)</span></p>
      </div>
      <div class="flex items-center gap-3 bg-surface-container rounded-full px-3 py-1.5 border border-outline-variant/30">
        <button data-action="decrement" data-id="${ci.item.id}" class="cart-qty-btn material-symbols-outlined text-on-surface-variant p-1 rounded-full hover:bg-surface-dim transition-colors text-[18px]">remove</button>
        <span class="font-semibold text-base w-6 text-center text-on-surface">${ci.quantity}</span>
        <button data-action="increment" data-id="${ci.item.id}" class="cart-qty-btn material-symbols-outlined text-on-surface-variant p-1 rounded-full hover:bg-surface-dim transition-colors text-[18px]">add</button>
      </div>
      <button data-action="delete" data-id="${ci.item.id}" class="cart-delete-btn material-symbols-outlined text-error p-2.5 hover:bg-error-container/40 rounded-full transition-colors ml-auto sm:ml-0 text-[20px]" title="Remove item">delete</button>
    </div>
  `).join('');

  // Update Summary numbers
  if (summarySubtotal) summarySubtotal.textContent = `$${cart.getSubtotal().toFixed(2)}`;
  if (summaryDelivery) summaryDelivery.textContent = `$${cart.getDeliveryFee().toFixed(2)}`;
  if (summaryTaxes) summaryTaxes.textContent = `$${cart.getTaxes().toFixed(2)}`;
  if (summaryTotal) summaryTotal.textContent = `$${cart.getTotal().toFixed(2)}`;

  if (summaryDiscountRow && summaryDiscount) {
    if (cart.discountRate > 0) {
      summaryDiscountRow.classList.remove('hidden');
      summaryDiscount.textContent = `-$${cart.getDiscountAmount().toFixed(2)}`;
    } else {
      summaryDiscountRow.classList.add('hidden');
    }
  }

  // Attach handlers
  listContainer.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const el = e.currentTarget as HTMLElement;
      const id = el.getAttribute('data-id')!;
      const action = el.getAttribute('data-action')!;
      cart.updateQuantity(id, action === 'increment' ? 1 : -1);
    });
  });

  listContainer.querySelectorAll('.cart-delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = (e.currentTarget as HTMLElement).getAttribute('data-id')!;
      cart.removeItem(id);
      showToast('Item removed from cart');
    });
  });
}

// Render Quick Slide-over Cart Drawer
export function renderQuickCartDrawer(): void {
  const container = document.getElementById('quick-cart-items');
  const countEl = document.getElementById('quick-cart-count');
  const subtotalEl = document.getElementById('quick-cart-subtotal');
  if (!container) return;

  const items = cart.getItems();
  if (countEl) countEl.textContent = `${cart.getTotalCount()} items`;
  if (subtotalEl) subtotalEl.textContent = `$${cart.getSubtotal().toFixed(2)}`;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center py-16 text-center px-4">
        <span class="material-symbols-outlined text-5xl text-outline-variant mb-3">shopping_bag</span>
        <h4 class="font-headline text-xl text-primary font-bold mb-1">Your cup is empty</h4>
        <p class="text-sm text-on-surface-variant mb-6">Explore our authentic Himalayan teas and handcrafted kitchen specials.</p>
        <button id="drawer-explore-btn" class="bg-primary text-on-primary text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors">
          Browse Menu
        </button>
      </div>
    `;
    document.getElementById('drawer-explore-btn')?.addEventListener('click', () => {
      toggleCartDrawer(false);
      router.navigate('menu');
    });
    return;
  }

  container.innerHTML = items.map(ci => `
    <div class="flex items-center gap-4 py-3 border-b border-outline-variant/20">
      <img src="${ci.item.image}" alt="${ci.item.name}" class="w-16 h-16 rounded-xl object-cover shrink-0" />
      <div class="flex-grow min-w-0">
        <h4 class="font-headline text-base font-bold text-on-surface truncate">${ci.item.name}</h4>
        <p class="text-xs text-primary font-bold">$${(ci.item.price * ci.quantity).toFixed(2)}</p>
        <div class="flex items-center gap-2 mt-1">
          <button data-action="decrement" data-id="${ci.item.id}" class="drawer-qty-btn w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-xs font-bold hover:bg-surface-dim">-</button>
          <span class="text-xs font-semibold w-4 text-center">${ci.quantity}</span>
          <button data-action="increment" data-id="${ci.item.id}" class="drawer-qty-btn w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-xs font-bold hover:bg-surface-dim">+</button>
        </div>
      </div>
      <button data-id="${ci.item.id}" class="drawer-del-btn text-on-surface-variant hover:text-error p-1">
        <span class="material-symbols-outlined text-[18px]">delete</span>
      </button>
    </div>
  `).join('');

  container.querySelectorAll('.drawer-qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const el = e.currentTarget as HTMLElement;
      const id = el.getAttribute('data-id')!;
      const action = el.getAttribute('data-action')!;
      cart.updateQuantity(id, action === 'increment' ? 1 : -1);
    });
  });

  container.querySelectorAll('.drawer-del-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = (e.currentTarget as HTMLElement).getAttribute('data-id')!;
      cart.removeItem(id);
    });
  });
}

// Update Cart Badge Count in Header
export function updateCartBadges(): void {
  const count = cart.getTotalCount();
  document.querySelectorAll('.cart-badge-count').forEach(el => {
    el.textContent = count.toString();
    if (count > 0) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
}

// Interactive Checkout Modal
export function openCheckoutModal(): void {
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;
  modal.classList.remove('hidden');

  const totalEl = document.getElementById('checkout-modal-total');
  const countEl = document.getElementById('checkout-modal-count');
  if (totalEl) totalEl.textContent = `$${cart.getTotal().toFixed(2)}`;
  if (countEl) countEl.textContent = `${cart.getTotalCount()} items`;
}

export function closeCheckoutModal(): void {
  document.getElementById('checkout-modal')?.classList.add('hidden');
}

// Reservation Confirmation Modal
export function openReservationSuccessModal(res: Reservation): void {
  const modal = document.getElementById('reservation-success-modal');
  if (!modal) return;

  document.getElementById('res-confirm-name')!.textContent = res.name;
  document.getElementById('res-confirm-date-time')!.textContent = `${res.date} at ${res.time}`;
  document.getElementById('res-confirm-guests')!.textContent = res.guests;
  document.getElementById('res-confirm-area')!.textContent = res.area;
  document.getElementById('res-confirm-ref')!.textContent = res.id;

  modal.classList.remove('hidden');
}

export function closeReservationSuccessModal(): void {
  document.getElementById('reservation-success-modal')?.classList.add('hidden');
}

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  router = new AppRouter();

  // Subscribe cart updates
  cart.subscribe(() => {
    updateCartBadges();
    renderQuickCartDrawer();
    renderCartPage();
  });
  updateCartBadges();

  // Navigation Links click events
  document.querySelectorAll('[data-route]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = (e.currentTarget as HTMLElement).getAttribute('data-route');
      if (route) {
        toggleMobileMenu(false);
        router.navigate(route);
      }
    });
  });

  // Mobile Menu Toggles
  document.querySelectorAll('.mobile-menu-toggle').forEach(btn => {
    btn.addEventListener('click', () => toggleMobileMenu());
  });
  document.getElementById('mobile-menu-backdrop')?.addEventListener('click', () => toggleMobileMenu(false));
  document.getElementById('mobile-menu-close')?.addEventListener('click', () => toggleMobileMenu(false));

  // Quick Cart Toggles
  document.querySelectorAll('.cart-drawer-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleCartDrawer();
    });
  });
  document.getElementById('cart-drawer-backdrop')?.addEventListener('click', () => toggleCartDrawer(false));
  document.getElementById('cart-drawer-close')?.addEventListener('click', () => toggleCartDrawer(false));

  // Menu Category Filter Chips
  document.querySelectorAll('.menu-cat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.menu-cat-btn').forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary', 'shadow-ambient');
        b.classList.add('bg-surface-container-lowest', 'text-on-surface-variant', 'border', 'border-outline-variant/30');
      });
      const el = e.currentTarget as HTMLElement;
      el.classList.add('bg-primary', 'text-on-primary', 'shadow-ambient');
      el.classList.remove('bg-surface-container-lowest', 'text-on-surface-variant', 'border-outline-variant/30');

      activeCategory = el.getAttribute('data-category') || 'all';
      renderMenuGrid();
    });
  });

  // Menu Search
  const searchInput = document.getElementById('menu-search-input') as HTMLInputElement;
  searchInput?.addEventListener('input', (e) => {
    menuSearchQuery = (e.target as HTMLInputElement).value;
    renderMenuGrid();
  });

  // Home Popular Items Add to Cart
  document.querySelectorAll('.home-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = (e.currentTarget as HTMLElement).getAttribute('data-item-id');
      const item = MENU_ITEMS.find(m => m.id === id);
      if (item) {
        cart.addItem(item, 1);
        showToast(`Added "${item.name}" to cart!`);
      }
    });
  });

  // Reservation Form Handling
  const resForm = document.getElementById('reservation-form') as HTMLFormElement;
  resForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('res-name') as HTMLInputElement).value;
    const email = (document.getElementById('res-email') as HTMLInputElement).value;
    const date = (document.getElementById('res-date') as HTMLInputElement).value || new Date().toISOString().split('T')[0];
    const time = (document.getElementById('res-time') as HTMLSelectElement).value;
    const guests = (document.getElementById('res-guests') as HTMLSelectElement).value;
    const area = (document.getElementById('res-area') as HTMLSelectElement)?.value || 'Floral Sunroom';
    const preferences = (document.getElementById('res-preferences') as HTMLTextAreaElement).value;

    if (!name || !email) {
      showToast('Please fill out your name and email.', 'error');
      return;
    }

    const booking: Reservation = {
      id: `SUKOON-${Math.floor(100000 + Math.random() * 900000)}`,
      name,
      email,
      date,
      time,
      guests,
      area,
      preferences
    };

    openReservationSuccessModal(booking);
    resForm.reset();
    showToast('Reservation confirmed successfully! A confirmation email has been sent.');
  });

  // Reservation Modal Close
  document.getElementById('res-modal-close')?.addEventListener('click', closeReservationSuccessModal);

  // Cart Promo Code Form
  document.getElementById('promo-apply-btn')?.addEventListener('click', () => {
    const input = document.getElementById('promo-input') as HTMLInputElement;
    if (!input) return;
    const result = cart.applyPromo(input.value);
    showToast(result.message, result.success ? 'check_circle' : 'error');
    if (result.success) {
      renderCartPage();
    }
  });

  // Cart Order Type Switchers (Delivery vs Pickup)
  document.querySelectorAll('.order-type-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.order-type-btn').forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary');
        b.classList.add('bg-surface-container-low', 'text-on-surface-variant');
      });
      const el = e.currentTarget as HTMLElement;
      el.classList.add('bg-primary', 'text-on-primary');
      el.classList.remove('bg-surface-container-low', 'text-on-surface-variant');

      const type = el.getAttribute('data-type') as 'delivery' | 'pickup' | 'dinein';
      cart.orderType = type;
      renderCartPage();
    });
  });

  // Checkout Button
  document.getElementById('cart-checkout-btn')?.addEventListener('click', () => {
    if (cart.getItems().length === 0) {
      showToast('Your cart is empty!', 'error');
      return;
    }
    openCheckoutModal();
  });

  // Quick Cart Drawer Checkout
  document.getElementById('drawer-checkout-btn')?.addEventListener('click', () => {
    toggleCartDrawer(false);
    router.navigate('cart');
  });

  // Checkout Modal Complete Form
  document.getElementById('checkout-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderNumber = `SK-${Math.floor(10000 + Math.random() * 90000)}`;
    closeCheckoutModal();
    cart.clear();
    showToast(`Order #${orderNumber} placed successfully! Est. preparation: 15-20 mins.`, 'celebration');
    router.navigate('home');
  });

  document.getElementById('checkout-modal-close')?.addEventListener('click', closeCheckoutModal);

  // Contact Form
  document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    showToast('Thank you! Your message has been sent to the Chiya and Sukoon team.');
  });

  // Newsletter Form
  document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    showToast('Subscribed! Welcome to the Chiya and Sukoon community.');
  });
});
