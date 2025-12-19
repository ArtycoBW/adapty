"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const brand = "#6D5BFF";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="text-sm font-medium text-neutral-800/90 hover:text-neutral-900 transition-colors"
      >
        {children}
      </Link>
    </NavigationMenuLink>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f7f3f1]/90 backdrop-blur hover:bg-white ease-linear duration-500">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-semibold">
              a
            </span>
            <span className="text-base font-semibold tracking-tight text-neutral-900">
              adapty
            </span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                className="h-8 rounded-full bg-white/70 hover:bg-white border border-black/10"
              >
                RU <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>RU</DropdownMenuItem>
              <DropdownMenuItem>EN</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 bg-transparent px-0 text-sm font-semibold text-neutral-800/90 hover:bg-transparent hover:text-neutral-900">
                  Продукт
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <div className="grid w-[360px] gap-2">
                    <Link href="#" className="rounded-md p-2 hover:bg-neutral-50">
                      <div className="text-sm font-medium">Подписки</div>
                      <div className="text-xs text-neutral-500">
                        SDK + paywalls + аналитика
                      </div>
                    </Link>
                    <Link href="#" className="rounded-md p-2 hover:bg-neutral-50">
                      <div className="text-sm font-medium">A/B тесты</div>
                      <div className="text-xs text-neutral-500">
                        Эксперименты и сегменты
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 bg-transparent px-0 text-sm font-semibold text-neutral-800/90 hover:bg-transparent hover:text-neutral-900">
                  Кейсы
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <div className="grid w-[320px] gap-2">
                    <Link href="#" className="rounded-md p-2 hover:bg-neutral-50">
                      <div className="text-sm font-semibold">Истории клиентов</div>
                      <div className="text-xs text-neutral-500">
                        Рост подписок и выручки
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink href="#">Ресурсы</NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink href="#">Документация</NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink href="#">Цены</NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="#"
                  className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                >
                  web2app
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden md:inline-flex text-sm font-bold text-neutral-800/90 hover:text-neutral-900"
          >
            Войти
          </Link>

          <Button
            variant="outline"
            className="h-10 rounded-md bg-transparent hover:bg-white"
            style={{ color: brand }}
          >
            Начать
            <ChevronRight />
          </Button>

          <Button
            className="h-10 rounded-md text-white hover:opacity-95 shadow-[0_10px_24px_-14px_rgba(109,91,255,0.9)]"
            style={{ backgroundColor: brand }}
          >
            Запись на демо
            <ChevronRight />
          </Button>
        </div>
      </div>
    </header>
  );
}
