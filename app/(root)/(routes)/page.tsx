// import Image from "next/image";

import SearchInput from "@/components/search-input";
import db from "@/lib/db";
import Categories from "@/components/categories";

export default async function Home() {
  const categories = await db.category.findMany({})

  // console.log(db)

  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories data = {categories} />
    </div>
  );
}
