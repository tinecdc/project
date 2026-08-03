import { Reveal } from './Reveal';
import { FloralDivider } from './Ornaments';

const programs = [
  {
    title: '18 Roses',
    people: [
      'Femeng Miranda',  'Roldan Lucena', 'Eric Natividad', 'Reynante Cu','Jun Cu','Lawrence Cu', 'Paolo Garcia', 'Jam Dela Fuente', 'Carlos Labayno'
      ,'Rafael Panganiban', 'Jerriel Ochoco', 'Franz Tapang', 'Seung Hyun Kim', 'Giro Nolan', 'Domingo Hernandez Jr.','Jared Reyes','Floyd Urrutia',  'Daddy Jorge Miranda',
    ],
  },
  {
    title: '18 Shots',
    people: [
      'Moira Oktumo', 'test', 'Camherzon Osiones', 'Kevin Dela Vega', 'Louie Lopez', 'Pauleen Inocentes', 'Siegfried Mariano', 'Youli Santiago', 'Iya Mendoza',
       'Migz Valimento', 'Heather Trinidad', 'Dhyana Estrella', 'PJ Cruz', 'Charlene Peralta', 'Camilla Celestino', 'Mariel Mauricio', 'test', 'Gaib Galvez'
    ],
  },
  {
    title: '18 Gifts',
    people: [
      'Audrey Rosales', 'Angelique Lalicon', 'Julianna De Guzman', 'Aaliyah Go', 'Maan Del Rosario', 'Dan Allen Pepanio', 'Teffany Montaraye', 'Felix Enriquez', 'Bettina Yan',
      'Josef Buyco', 'Margarette Reyes', 'Lebron Mapue', 'Mischa Castro', 'Julliana Garcia', 'Anika Boydon', 'Janelle Joaquin', 'Jana Boydon', 'test',
    ],
  },
  {
    title: '18 Candles',
    people: [
       'test','test', 'test', 'Anne Princess Obaniana', 'Alexandra Cu', 'Mhae Dabu-Garcia', 'Fatima Garcia-Panganiban', 'Destine Natividad', 'Elisha Lumba', 'Ysabelle Lumba',
      'Rachel Cu', 'Samantha Dela Fuente', 'Zerina Dela Cruz', 'Christine Dela Cruz', 'Angelika Dela Cruz', 'Anya Rayein Miranda', 'Athena Ray Miranda', 'Cristina Miranda',
    ],
  },
  {
    title: '18 Wishes',
    people: [
      'test', 'Clarence Felomino', 'Ninna Castro', 'Jasmin Critica', 'Alfonso Victor Castro', 'test', 'test', 'Jhenna Aurelio', 'John Persian Cu',
      'Josephine De Guzman', 'Beth Mallari', 'Vicky Robles', 'Liza Gamboa', 'Pie Cu', 'Fely Gamboa', 'Noemi Garcia', 'Carlota Miranda', 'Grace Dela Fuente',
    ],
  },
];

export function Program() {
  return (
    <section id="program" className="relative overflow-hidden bg-royal-950/70 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cream-100/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal variant="fade">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-gold-600">
            Program
          </p>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <h2 className="mt-4 text-center font-script text-4xl text-gold-500 sm:text-5xl">
            People in the Program
          </h2>
        </Reveal>

        <FloralDivider className="my-8" />

        <Reveal variant="up" delay={220}>
          <p className="mx-auto max-w-2xl text-center font-serif text-lg leading-relaxed text-gold-200 sm:text-xl">
            //
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.slice(0, 4).map((program, index) => {
            return (
              <Reveal key={program.title} variant="up" delay={260 + index * 90}>
                <div className="rounded-3xl border border-gold-400/30 bg-royal-900/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur">
                  <p className="text-center text-sm uppercase tracking-[0.3em] text-gold-500">
                    {program.title}
                  </p>
                  <div className="mt-5">
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="space-y-2">
                        {program.people
                          .filter((person) => person.trim().length > 0)
                          .slice(0, 9)
                          .map((person) => (
                            <div
                              key={person}
                              className="rounded-2xl border border-gold-400/20 bg-royal-950/60 px-3 py-2 text-center text-sm text-gold-200"
                            >
                              {person}
                            </div>
                          ))}
                      </div>
                      <div className="space-y-2">
                        {program.people
                          .filter((person) => person.trim().length > 0)
                          .slice(9)
                          .map((person) => (
                            <div
                              key={person}
                              className="rounded-2xl border border-gold-400/20 bg-royal-950/60 px-3 py-2 text-center text-sm text-gold-200"
                            >
                              {person}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}

          {programs.slice(4).map((program, index) => {
            return (
              <Reveal key={program.title} variant="up" delay={260 + 4 * 90 + index * 90}>
                <div className="md:col-span-2 flex justify-center">
                  <div className="mx-auto w-full rounded-3xl border border-gold-400/30 bg-royal-900/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur md:max-w-3xl">
                    <p className="text-center text-sm uppercase tracking-[0.3em] text-gold-500">
                      {program.title}
                    </p>
                    <div className="mt-5">
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="space-y-2">
                          {program.people
                            .filter((person) => person.trim().length > 0)
                            .slice(0, 9)
                            .map((person) => (
                              <div
                                key={person}
                                className="rounded-2xl border border-gold-400/20 bg-royal-950/60 px-3 py-2 text-center text-sm text-gold-200"
                              >
                                {person}
                              </div>
                            ))}
                        </div>
                        <div className="space-y-2">
                          {program.people
                            .filter((person) => person.trim().length > 0)
                            .slice(9)
                            .map((person) => (
                              <div
                                key={person}
                                className="rounded-2xl border border-gold-400/20 bg-royal-950/60 px-3 py-2 text-center text-sm text-gold-200"
                              >
                                {person}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
