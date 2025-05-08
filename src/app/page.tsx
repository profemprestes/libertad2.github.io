import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CalendarDays, Newspaper, Users } from 'lucide-react';
import { mockNewsArticles, mockMatches } from '@/lib/mock-data';
import { SectionTitle } from '@/components/shared/section-title';
import { ClubLogo } from '@/components/club/club-logo';

export default function HomePage() {
  const latestNews = mockNewsArticles.slice(0, 2);
  const upcomingMatch = mockMatches.find(match => match.status === 'upcoming');

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary via-primary/80 to-rose-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://picsum.photos/seed/stadium/1200/800')" }}
          data-ai-hint="stadium crowd"
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <ClubLogo className="h-24 w-24 md:h-32 md:w-32 text-primary-foreground mx-auto mb-6 drop-shadow-lg" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-foreground drop-shadow-md">
            Club Atlético Libertad
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto drop-shadow-sm">
            Pasión, Historia, Victoria. Únete a la familia Libertad.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
              <Link href="/matches">
                Ver Partidos <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 shadow-lg transition-transform hover:scale-105">
              <Link href="/roster">
                Conoce al Equipo <Users className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section>
        <SectionTitle title="Últimas Noticias" icon={Newspaper} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1"> {/* On lg, stack news for better readability on home */}
          {latestNews.map((article) => (
            <Card key={article.id} className="flex flex-col md:flex-row overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {article.imageUrl && (
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    data-ai-hint="sports news"
                  />
                </div>
              )}
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link href={`/news#${article.id}`}>{article.title}</Link>
                  </CardTitle>
                  <CardDescription>{new Date(article.date).toLocaleDateString('es-ES')}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{article.summary}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="text-primary hover:text-primary/80 p-0">
                    <Link href={`/news#${article.id}`}>
                      Leer Más <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
         <div className="mt-8 text-center">
          <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/news">
              Todas las Noticias <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Upcoming Match Section */}
      {upcomingMatch && (
        <section>
          <SectionTitle title="Próximo Partido" icon={CalendarDays} />
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-secondary">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl text-primary">{upcomingMatch.competition}</CardTitle>
              <CardDescription>{new Date(upcomingMatch.date).toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'short' })}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-around gap-4">
                <div className="flex flex-col items-center">
                  {upcomingMatch.homeTeam === "Club Atlético Libertad" && <ClubLogo className="h-16 w-16 md:h-20 md:w-20 mb-2 text-primary" />}
                  {upcomingMatch.homeTeam !== "Club Atlético Libertad" && upcomingMatch.opponentLogoUrl && (
                    <Image src={upcomingMatch.opponentLogoUrl} alt={`Logo de ${upcomingMatch.homeTeam}`} width={80} height={80} className="mb-2 rounded-full" data-ai-hint="team logo" />
                  )}
                  <p className="text-xl font-semibold">{upcomingMatch.homeTeam}</p>
                </div>
                <p className="text-4xl font-bold text-muted-foreground">vs.</p>
                <div className="flex flex-col items-center">
                  {upcomingMatch.awayTeam === "Club Atlético Libertad" && <ClubLogo className="h-16 w-16 md:h-20 md:w-20 mb-2 text-primary" />}
                  {upcomingMatch.awayTeam !== "Club Atlético Libertad" && upcomingMatch.opponentLogoUrl && (
                     <Image src={upcomingMatch.opponentLogoUrl} alt={`Logo de ${upcomingMatch.awayTeam}`} width={80} height={80} className="mb-2 rounded-full" data-ai-hint="team logo" />
                  )}
                   <p className="text-xl font-semibold">{upcomingMatch.awayTeam}</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-muted-foreground">{upcomingMatch.venue}</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/matches">
                  Detalles del Partido <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
      )}
    </div>
  );
}
