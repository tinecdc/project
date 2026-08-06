import { Reveal } from './Reveal';
import { FloralDivider } from './Ornaments';

const programs = [
  {
    title: '18 Roses',
    people: [
      'Mr. Fernando Miranda',  'Mr. Roldan Lucena', 'Mr. Frederic Natividad', 'Mr. Reynante Cu','Mr. John Persian Cu','Mr. Lawrence Cu', 'Mr. Paolo Garcia', 'Mr. Jam Dela Fuente', 'Mr. Carlos Labayno'
      ,'Mr. Rafael Panganiban', 'Mr. Jerriel Ochoco', 'Mr. Franz Tapang', 'Mr. Seung Hyun Kim', 'Mr. Giro Hinolan', 'Mr. Domingo Hernandez Jr.','Mr. Jared Reyes','Mr. Floyd Urrutia',  'Mr. Jorge Miranda',
    ],
  },
  {
    title: '18 Shots',
    people: [
      'Ms. Moira Okutumo',  'Mr. Camherzon Osiones', 'Mr. Cian Guison', 'Mr. Kevin Dela Vega', 'Ms. Louie Lopez', 'Ms. Pauleen Inocentes', 'Mr. Siegfried Mariano', 'Mr. Youli Santiago', 'Ms. Iya Mendoza',
       'Mr. Migz Valimento', 'Ms. Heather Trinidad', 'Mr. John Paul Hermogenes', 'Ms. Dhyana Estrella', 'Ms. PJ Cruz', 'Ms. Charlene Peralta', 'Ms. Camilla Celestino', 'Ms. Mariel Mauricio',  'Mr. Gaib Galvez'
    ],
  },
  {
    title: '18 Gifts',
    people: [
      'Mr. Elmo Lumba','Ms. Audrey Rosales', 'Ms. Angelique Lalicon', 'Ms. Julianna De Guzman', 'Ms. Aaliyah Go', 'Ms. Maan Del Rosario', 'Mr. Dan Allen Pepanio', 'Ms. Teffany Montaraye', 'Mr. Felix Enriquez', 'Ms. Bettina Yan',
      'Mr. Josef Buyco', 'Ms. Margarette Reyes', 'Mr. Lebron Mapue', 'Ms. Mischa Castro', 'Ms. Julliana Garcia', 'Ms. Anika Boydon', 'Ms. Janelle Joaquin', 'Ms. Jana Boydon', 
    ],
  },
  {
    title: '18 Candles',
    people: [
      'Mrs. Carlota Natividad', 'Ms. Noemi Garcia',  'Mrs. Rosario Cu','Ms. Anne Princess Obaniana', 'Ms. Alexandra Cu', 'Mrs. Mhae Garcia', 'Mrs. Fatima Panganiban', 'Ms. Destine Natividad', 'Ms. Elisha Lumba', 'Ms. Ysabelle Lumba',
      'Ms. Rachel Cu', 'Ms. Samantha Dela Fuente', 'Ms. Zerina Dela Cruz', 'Ms. Christine Dela Cruz', 'Ms. Angelika Dela Cruz', 'Ms. Anya Rayein Miranda', 'Ms. Athena Ray Miranda', 'Mrs. Cristina Miranda',
    ],
  },
  {
    title: '18 Wishes',
    people: [
      'Mr. Clarence Felomino', 'Ms. Ninna Castro', 'Ms. Jasmin Critica', 'Mr. Alfonso Victor Castro', 'Mrs. Josephine De Guzman', 'Mrs. Beth Mallari',
       'Ms. Vicky Robles', 'Mrs. Liza Gamboa', 'Mrs. Emily Loiz', 'Mrs. Flerida Cruz', 'Mrs. Ida Bernardo','Mrs. Precy Hilario' , 'Mrs. Victoria Galvez',  'Ms. Fely Gamboa','Mr. Latrell & Ms. Louella Aurelio','Mrs. Jennilyn Aurelio','Ms. Tamara Dela Fuente', 'Ms. Grace Dela Fuente',
    ],
  },
];

export function Program() {
  return (
    <section id="program" className="relative overflow-hidden bg-[#07111f] py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-gold-400/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cream-100/8 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal variant="fade">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-gold-600">
            Program
          </p>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <h2 className="mt-4 text-center font-script text-4xl text-gold-400 sm:text-5xl">
            People in the Program
          </h2>
        </Reveal>

        <FloralDivider className="my-8" />


        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.slice(0, 4).map((program, index) => {
            return (
              <Reveal key={program.title} variant="up" delay={260 + index * 90}>
                <div className="relative overflow-hidden rounded-[1.75rem] border border-fuchsia-400/30 bg-[linear-gradient(135deg,rgba(8,12,30,0.96),rgba(25,20,56,0.94),rgba(7,10,22,0.98))] p-6 shadow-[0_0_40px_rgba(168,85,247,0.16)] backdrop-blur-sm">
                  <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-white/10" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_70%)]" />
                  <div className="pointer-events-none absolute -right-2 top-3 h-3 w-3 rounded-full bg-white/80 blur-[1px]" />
                  <div className="pointer-events-none absolute right-7 top-2 h-2 w-2 rounded-full bg-cyan-200/70" />
                  <div className="pointer-events-none absolute left-5 top-6 h-1.5 w-1.5 rounded-full bg-fuchsia-200/70" />
                  <p className="relative z-10 text-center text-sm uppercase tracking-[0.35em] text-gold-400">
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
                              className="rounded-2xl border border-fuchsia-400/20 bg-[linear-gradient(90deg,rgba(15,23,42,0.95),rgba(30,18,79,0.85),rgba(15,23,42,0.95))] px-3 py-2 text-center text-sm text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
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
                              className="rounded-2xl border border-fuchsia-400/20 bg-[linear-gradient(90deg,rgba(15,23,42,0.95),rgba(30,18,79,0.85),rgba(15,23,42,0.95))] px-3 py-2 text-center text-sm text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
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
                  <div className="relative mx-auto w-full overflow-hidden rounded-[1.75rem] border border-fuchsia-400/30 bg-[linear-gradient(135deg,rgba(8,12,30,0.96),rgba(25,20,56,0.94),rgba(7,10,22,0.98))] p-6 shadow-[0_0_40px_rgba(168,85,247,0.16)] backdrop-blur-sm md:max-w-3xl">
                    <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-white/10" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]" />
                    <div className="pointer-events-none absolute -right-2 top-3 h-3 w-3 rounded-full bg-white/80 blur-[1px]" />
                    <div className="pointer-events-none absolute right-7 top-2 h-2 w-2 rounded-full bg-cyan-200/70" />
                    <div className="pointer-events-none absolute left-5 top-6 h-1.5 w-1.5 rounded-full bg-fuchsia-200/70" />
                    <p className="relative z-10 text-center text-sm uppercase tracking-[0.35em] text-gold-400">
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
                                className="rounded-2xl border border-fuchsia-400/20 bg-[linear-gradient(90deg,rgba(15,23,42,0.95),rgba(30,18,79,0.85),rgba(15,23,42,0.95))] px-3 py-2 text-center text-sm text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
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
                                className="rounded-2xl border border-fuchsia-400/20 bg-[linear-gradient(90deg,rgba(15,23,42,0.95),rgba(30,18,79,0.85),rgba(15,23,42,0.95))] px-3 py-2 text-center text-sm text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
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
