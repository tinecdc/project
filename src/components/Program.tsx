import { Reveal } from './Reveal';
import { FloralDivider } from './Ornaments';

const programs = [
  {
    title: '18 Roses',
    people: [
      'Mr. Fernando Miranda',  'Mr. Roldan Lucena', 'Mr. Frederic Natividad', 'Mr. Reynante Cu','Mr. John Persian Cu','Mr. Lawrence Cu', 'Mr. Paolo Garcia', 'Mr. Jam Dela Fuente', 'Mr. Carlos Labayno'
      ,'Mr. Rafael Panganiban', 'Mr. Jerriel Ochoco', 'Mr. Franz Tapang', 'Mr. Seung Hyun Kim', 'Mr. Giro Nolan', 'Mr. Domingo Hernandez Jr.','Mr. Jared Reyes','Mr. Floyd Urrutia',  'Mr. Jorge Miranda',
    ],
  },
  {
    title: '18 Shots',
    people: [
      'Ms. Moira Okutumo', 'test', 'Mr. Camherzon Osiones', 'Mr. Kevin Dela Vega', 'Ms. Louie Lopez', 'Ms. Pauleen Inocentes', 'Mr. Siegfried Mariano', 'Mr. Youli Santiago', 'Ms. Iya Mendoza',
       'Mr. Migz Valimento', 'Ms. Heather Trinidad', 'Ms. Dhyana Estrella', 'Ms. PJ Cruz', 'Ms. Charlene Peralta', 'Ms. Camilla Celestino', 'Ms. Mariel Mauricio', 'test', 'Mr. Gaib Galvez'
    ],
  },
  {
    title: '18 Gifts',
    people: [
      'Ms. Audrey Rosales', 'Ms. Angelique Lalicon', 'Ms. Julianna De Guzman', 'Ms. Aaliyah Go', 'Ms. Maan Del Rosario', 'Mr. Dan Allen Pepanio', 'Ms. Teffany Montaraye', 'Mr. Felix Enriquez', 'Ms. Bettina Yan',
      'Mr. Josef Buyco', 'Ms. Margarette Reyes', 'Mr. Lebron Mapue', 'Ms. Mischa Castro', 'Ms. Julliana Garcia', 'Ms. Anika Boydon', 'Ms. Janelle Joaquin', 'Ms. Jana Boydon', 'test',
    ],
  },
  {
    title: '18 Candles',
    people: [
       'test','test', 'test', 'Ms. Anne Princess Obaniana', 'Ms. Alexandra Cu', 'Mrs. Mhae Garcia', 'Mrs. Fatima Panganiban', 'Ms. Destine Natividad', 'Ms. Elisha Lumba', 'Ms. Ysabelle Lumba',
      'Ms. Rachel Cu', 'Ms. Samantha Dela Fuente', 'Ms. Zerina Dela Cruz', 'Ms. Christine Dela Cruz', 'Ms. Angelika Dela Cruz', 'Ms. Anya Rayein Miranda', 'Ms. Athena Ray Miranda', 'Mrs. Cristina Miranda',
    ],
  },
  {
    title: '18 Wishes',
    people: [
      'Mr. Clarence Felomino', 'Ms. Ninna Castro', 'Ms. Jasmin Critica', 'Mr. Alfonso Victor Castro', 'Mrs. Josephine De Guzman', 'Mrs. Beth Mallari',
       'Ms. Vicky Robles', 'Mrs. Liza Gamboa', 'Mrs. Rosario Cu','Mrs. Emily Loiz', 'Ms. Fely Gamboa', 'Ms. Noemi Garcia', 'Mrs. Carlota Natividad', 'Mr. Latrell Matthew Aurelio',  'Ms. Iya Aurelio','Mrs. Jennlyn Aurelio','Ms. Tamara Dela Fuente', 'Ms. Grace Dela Fuente',
    ],
  },
];

export function Program() {
  return (
    <section id="program" className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_40%),linear-gradient(135deg,#07111f_0%,#0e1a2f_45%,#030814_100%)] py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cream-100/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal variant="fade">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-gold-600">
            Program
          </p>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <h2 className="mt-4 text-center font-script text-4xl text-gold-500 drop-shadow-[0_0_20px_rgba(212,175,55,0.25)] sm:text-5xl">
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
                <div className="group relative overflow-hidden rounded-[2rem] border border-gold-300/40 bg-[linear-gradient(135deg,rgba(18,31,58,0.95),rgba(38,53,85,0.92),rgba(8,18,35,0.98))] p-6 shadow-[0_0_45px_rgba(212,175,55,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(212,175,55,0.24)]">
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_35%),linear-gradient(120deg,rgba(255,215,0,0.16),transparent_40%,rgba(255,255,255,0.08),transparent_80%)]" />
                  <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-gold-300/20 blur-3xl transition-all duration-300 group-hover:scale-110" />
                  <p className="relative z-10 inline-flex w-full justify-center rounded-full border border-gold-300/30 bg-[linear-gradient(90deg,rgba(255,215,0,0.18),rgba(255,255,255,0.04),rgba(255,215,0,0.18))] px-4 py-2 text-center text-sm uppercase tracking-[0.35em] text-gold-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
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
                              className="rounded-2xl border border-gold-400/20 bg-gradient-to-r from-royal-950/80 via-royal-900/70 to-royal-950/80 px-3 py-2 text-center text-sm text-gold-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-300/50 hover:text-gold-100"
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
                              className="rounded-2xl border border-gold-400/20 bg-gradient-to-r from-royal-950/80 via-royal-900/70 to-royal-950/80 px-3 py-2 text-center text-sm text-gold-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-300/50 hover:text-gold-100"
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
                  <div className="group relative mx-auto w-full overflow-hidden rounded-[2rem] border border-gold-300/40 bg-[linear-gradient(135deg,rgba(18,31,58,0.95),rgba(38,53,85,0.92),rgba(8,18,35,0.98))] p-6 shadow-[0_0_45px_rgba(212,175,55,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(212,175,55,0.24)] md:max-w-3xl">
                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_35%),linear-gradient(120deg,rgba(255,215,0,0.16),transparent_40%,rgba(255,255,255,0.08),transparent_80%)]" />
                    <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-gold-300/20 blur-3xl transition-all duration-300 group-hover:scale-110" />
                    <p className="relative z-10 inline-flex w-full justify-center rounded-full border border-gold-300/30 bg-[linear-gradient(90deg,rgba(255,215,0,0.18),rgba(255,255,255,0.04),rgba(255,215,0,0.18))] px-4 py-2 text-center text-sm uppercase tracking-[0.35em] text-gold-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
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
                                className="rounded-2xl border border-gold-400/20 bg-gradient-to-r from-royal-950/80 via-royal-900/70 to-royal-950/80 px-3 py-2 text-center text-sm text-gold-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-300/50 hover:text-gold-100"
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
                                className="rounded-2xl border border-gold-400/20 bg-gradient-to-r from-royal-950/80 via-royal-900/70 to-royal-950/80 px-3 py-2 text-center text-sm text-gold-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-300/50 hover:text-gold-100"
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
