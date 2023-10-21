"use client";

export default function SubMenu() {
  const menuItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Pizza" },
    { id: 3, name: "Burger" },
    { id: 4, name: "Drinks" },
    { id: 5, name: "Sandwich" },
    { id: 6, name: "Noodles" },
    { id: 7, name: "Chicken" },
  ];

  return (
    <>
      <div id="SubMenu" className="border-b ">
        <div className="flex items-center justify-center w-full mx-auto max-w-[1200px]">
          <ul
            id="TopMenuLeft"
            className="
                            flex 
                            items-center 
                            text-[13px] 
                            text-[#333333]
                            px-2 
                            h-8
                        "
          >
            {menuItems.map((item) => (
              <li key={item.id} className="px-3 hover:underline cursor-pointer">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
