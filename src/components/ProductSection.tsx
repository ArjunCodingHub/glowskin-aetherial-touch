
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Product {
  name: string;
  description: string;
  images: string[];
}

const productCategories = {
  moisturizers: [
    {
      name: "Quantum Hydration Cream",
      description: "Advanced moisture-locking technology with hyaluronic microspheres",
      images: [
        "https://i.pinimg.com/474x/2a/22/8b/2a228b3a0b8b3d8497b6154f9c26ffab.jpg",
        "https://i.pinimg.com/474x/fd/98/8b/fd988b61cb0ee4cdd0f944026def535f.jpg",
        "https://i.pinimg.com/474x/5b/a9/42/5ba94255f467545038db57580c00d23a.jpg",
        "https://i.pinimg.com/474x/47/d4/46/47d4460f27ff4f153379d527a70f958b.jpg"
      ]
    },
    {
      name: "Nano-Peptide Night Repair",
      description: "Rebuilding skin matrix while you sleep with advanced peptides",
      images: [
        "https://i.pinimg.com/474x/5b/a9/42/5ba94255f467545038db57580c00d23a.jpg",
        "https://i.pinimg.com/474x/fd/98/8b/fd988b61cb0ee4cdd0f944026def535f.jpg",
        "https://i.pinimg.com/474x/2a/22/8b/2a228b3a0b8b3d8497b6154f9c26ffab.jpg",
        "https://i.pinimg.com/474x/47/d4/46/47d4460f27ff4f153379d527a70f958b.jpg"
      ]
    }
  ],
  cleansers: [
    {
      name: "Bioactive Purifying Foam",
      description: "Smart-cleansing technology that adapts to your skin's needs",
      images: [
        "https://i.pinimg.com/474x/91/1a/ea/911aea0a1f834f316a11718289bc460a.jpg",
        "https://i.pinimg.com/474x/bf/40/14/bf4014898783c479158191e1f54cb921.jpg",
        "https://i.pinimg.com/474x/34/8f/c5/348fc5e85d86f1fae5b7b55b53a22146.jpg",
        "https://i.pinimg.com/474x/6a/1d/96/6a1d96b21788c8c8902ee3b1e7001e88.jpg"
      ]
    },
    {
      name: "Molecular Micellar Solution",
      description: "Gentle yet effective makeup removal with protective antioxidants",
      images: [
        "https://i.pinimg.com/474x/bf/40/14/bf4014898783c479158191e1f54cb921.jpg",
        "https://i.pinimg.com/474x/91/1a/ea/911aea0a1f834f316a11718289bc460a.jpg",
        "https://i.pinimg.com/474x/34/8f/c5/348fc5e85d86f1fae5b7b55b53a22146.jpg",
        "https://i.pinimg.com/474x/6a/1d/96/6a1d96b21788c8c8902ee3b1e7001e88.jpg"
      ]
    }
  ],
  sunscreens: [
    {
      name: "Prismatic Defense SPF 50",
      description: "Full-spectrum protection with light-adaptive technology",
      images: [
        "https://i.pinimg.com/474x/25/ad/68/25ad6810d7b469e227182a45ca0ee5b1.jpg",
        "https://i.pinimg.com/474x/53/47/38/5347381fa6ed10a726786534788a7f02.jpg",
        "https://i.pinimg.com/474x/bd/d8/0b/bdd80bf7a946ae1370c0cb5c56303788.jpg",
        "https://i.pinimg.com/736x/8b/13/95/8b13957c455a964ae9a2483f36a5fa6a.jpg"
      ]
    },
    {
      name: "Helioguard Invisible Shield",
      description: "Weightless formula with environmental protection factors",
      images: [
        "https://i.pinimg.com/474x/53/47/38/5347381fa6ed10a726786534788a7f02.jpg",
        "https://i.pinimg.com/474x/25/ad/68/25ad6810d7b469e227182a45ca0ee5b1.jpg",
        "https://i.pinimg.com/474x/bd/d8/0b/bdd80bf7a946ae1370c0cb5c56303788.jpg",
        "https://i.pinimg.com/736x/8b/13/95/8b13957c455a964ae9a2483f36a5fa6a.jpg"
      ]
    }
  ]
};

type CategoryKey = keyof typeof productCategories;

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('moisturizers');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      id="product" 
      ref={sectionRef}
      className="container mx-auto px-4 py-24 opacity-0"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-glow-blue to-glow-purple">
            Futuristic Products
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our advanced skincare formulations combine cutting-edge technology with pristine natural ingredients
            to deliver exceptional results for all skin types and concerns.
          </p>
        </div>
        
        <Tabs defaultValue="moisturizers" className="w-full" onValueChange={(value) => setActiveCategory(value as CategoryKey)}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100/50 backdrop-blur-sm">
              <TabsTrigger value="moisturizers" className="text-sm md:text-base">Moisturizers</TabsTrigger>
              <TabsTrigger value="cleansers" className="text-sm md:text-base">Cleansers</TabsTrigger>
              <TabsTrigger value="sunscreens" className="text-sm md:text-base">Sunscreens</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(productCategories).map(([category, products]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-gradient-to-r from-glow-purple to-glow-blue text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:animate-glow"
          >
            View All Products
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="futuristic-card overflow-hidden glow-effect">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {product.images.map((img, idx) => (
          <div key={idx} className="overflow-hidden aspect-square">
            <img 
              src={img} 
              alt={`${product.name} image ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
