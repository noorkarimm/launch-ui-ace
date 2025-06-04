
import HeroSectionOne from "@/components/HeroSectionDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Dotted Layout Guide Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical dotted lines */}
        <div className="absolute left-1/4 top-0 h-full w-px border-l-2 border-dotted border-gray-300 dark:border-gray-700 opacity-30" />
        <div className="absolute left-1/2 top-0 h-full w-px border-l-2 border-dotted border-gray-300 dark:border-gray-700 opacity-30" />
        <div className="absolute left-3/4 top-0 h-full w-px border-l-2 border-dotted border-gray-300 dark:border-gray-700 opacity-30" />
        <div className="absolute left-16 top-0 h-full w-px border-l-2 border-dotted border-gray-300 dark:border-gray-700 opacity-20" />
        <div className="absolute right-16 top-0 h-full w-px border-l-2 border-dotted border-gray-300 dark:border-gray-700 opacity-20" />
        
        {/* Horizontal dotted lines */}
        <div className="absolute top-1/4 left-0 w-full h-px border-t-2 border-dotted border-gray-300 dark:border-gray-700 opacity-30" />
        <div className="absolute top-1/2 left-0 w-full h-px border-t-2 border-dotted border-gray-300 dark:border-gray-700 opacity-30" />
        <div className="absolute top-3/4 left-0 w-full h-px border-t-2 border-dotted border-gray-300 dark:border-gray-700 opacity-30" />
        <div className="absolute top-20 left-0 w-full h-px border-t-2 border-dotted border-gray-300 dark:border-gray-700 opacity-20" />
        <div className="absolute bottom-20 left-0 w-full h-px border-t-2 border-dotted border-gray-300 dark:border-gray-700 opacity-20" />
        
        {/* Additional shorter guide lines for spacing suggestions */}
        <div className="absolute top-32 left-1/3 w-1/3 h-px border-t-2 border-dashed border-gray-300 dark:border-gray-700 opacity-25" />
        <div className="absolute bottom-32 right-1/3 w-1/3 h-px border-t-2 border-dashed border-gray-300 dark:border-gray-700 opacity-25" />
        <div className="absolute left-12 top-1/3 h-1/3 w-px border-l-2 border-dashed border-gray-300 dark:border-gray-700 opacity-25" />
        <div className="absolute right-12 bottom-1/3 h-1/3 w-px border-l-2 border-dashed border-gray-300 dark:border-gray-700 opacity-25" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSectionOne />
      </div>
    </div>
  );
};

export default Index;
