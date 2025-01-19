import { Suspense } from "react";
import GenreSecion from "../Section/GenreSection";

export default function ComicListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-1fr-300px gap-10">
            {children}
            <Suspense fallback={<p>Loading..</p>}>
              <GenreSecion />
            </Suspense>
        </div>
    </>
  );
}
