import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikler om Instagram, contentstrategi, sociale medier og digitale værktøjer, der hjælper din virksomhed med at vokse.",
};

const posts = [
  {
    title: "Sådan finder du din content strategi",
    excerpt:
      "En content strategi behøver ikke være kompliceret. Her deler jeg, hvordan du finder en retning, der føles autentisk, skaber overblik og gør det lettere at være synlig på Instagram.",
    date: "Læs indlægget",
    href: "/blog/content-strategi",
  },
  {
    title: "3 tegn på, at du bør uddelegere din Instagram",
    excerpt:
      "Hvornår giver det mening at få hjælp til dine sociale medier? Her er de tegn, jeg selv ser efter hos mine kunder.",
    date: "Kommer snart",
  },
  {
    title: "Sådan bygger du et brandbook, der holder",
    excerpt:
      "Et godt brandbook er mere end farver og fonte. Få mit bud på, hvad der egentlig skal med.",
    date: "Kommer snart",
  },
];

export default function BlogPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Blog"
          title="Tanker om Instagram, content og struktur"
          description="Her deler jeg løbende indsigter, tips og refleksioner fra arbejdet med sociale medier. Nye indlæg er på vej."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) =>
            post.href ? (
              <Link
                key={post.title}
                href={post.href}
                className="card flex h-full flex-col transition-colors duration-200 hover:bg-white"
              >
                <p className="eyebrow mb-3">{post.date}</p>
                <h3 className="font-display text-xl text-espresso">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-espresso-light">
                  {post.excerpt}
                </p>
              </Link>
            ) : (
              <div key={post.title} className="card flex h-full flex-col">
                <p className="eyebrow mb-3">{post.date}</p>
                <h3 className="font-display text-xl text-espresso">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-espresso-light">
                  {post.excerpt}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
