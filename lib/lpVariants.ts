export type LpVariant = {
  id: number;
  slug: string;
  categoria: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  testimonialHeadline: string;
  faqHeadline: string;
  ctaText: string;
};

// ─── 50 variações geradas a partir do Excel ───────────────────────────
export const LP_VARIANTS: LpVariant[] = [
  // 1–5 Dor/Incômodo
  {
    id: 1,
    slug: "acordar-noite-prostata-fortaleza",
    categoria: "Dor/Incômodo",
    heroTitle: "Acordar 5x por noite para ir no banheiro não é normal.",
    heroSubtitle:
      "É sinal de que sua próstata está te dominando. O HoLEP devolve seu sono — e sua liberdade.",
    metaTitle: "Tratamento para Acordar à Noite por Próstata | Dr. Érico Diógenes — Fortaleza",
    metaDescription:
      "Acordar 5x por noite para urinar? A HPB está roubando seu sono. Conheça o HoLEP, tratamento laser definitivo em Fortaleza. Agende sua avaliação.",
    testimonialHeadline: "O que quem já fez HoLEP diz sobre o resultado",
    faqHeadline: "Tire suas dúvidas antes de dar o primeiro passo",
    ctaText: "Quero recuperar meu sono — falar com Dr. Érico",
  },
  {
    id: 2,
    slug: "proximo-banheiro-prostata-fortaleza",
    categoria: "Dor/Incômodo",
    heroTitle: "Você planeja seu dia em volta dos banheiros?",
    heroSubtitle:
      "A próstata aumentada rouba sua liberdade. Existe tratamento definitivo — sem remédios para sempre.",
    metaTitle: "Urgência Urinária por Próstata em Fortaleza | Dr. Érico Diógenes",
    metaDescription:
      "Sua vida gira em torno do banheiro? Próstata aumentada limita sua liberdade. HoLEP é a solução definitiva. Dr. Érico Diógenes, especialista em Fortaleza.",
    testimonialHeadline: "Histórias reais de homens que recuperaram o sono e a liberdade",
    faqHeadline: "O que todo homem pergunta antes de fazer HoLEP",
    ctaText: "Quero recuperar minha liberdade — agendar avaliação",
  },
  {
    id: 3,
    slug: "jato-fraco-urina-fortaleza",
    categoria: "Dor/Incômodo",
    heroTitle: "Jato fraco, gotejamento e noites mal dormidas.",
    heroSubtitle:
      "Seu corpo está pedindo ajuda. O HoLEP resolve de forma definitiva, minimamente invasiva.",
    metaTitle: "Jato Fraco ao Urinar — Tratamento em Fortaleza | Dr. Érico Diógenes",
    metaDescription:
      "Jato fraco, gotejamento e interrupções noturnas. São sinais de HPB. Conheça o HoLEP com Dr. Érico Diógenes, urologista referência em Fortaleza-CE.",
    testimonialHeadline: "Mais de 150 pacientes em Fortaleza já transformaram suas vidas",
    faqHeadline: "Respostas diretas para você decidir com segurança",
    ctaText: "Entender o HoLEP para jato fraco — falar agora",
  },
  {
    id: 4,
    slug: "dor-urgencia-urinar-fortaleza",
    categoria: "Dor/Incômodo",
    heroTitle: "A ansiedade de sentir a vontade apertar e saber que vai doer.",
    heroSubtitle:
      "Não precisa ser assim. O HoLEP elimina a obstrução da próstata de vez, com recuperação em 24–48h.",
    metaTitle: "Dor ao Urinar e Urgência Urinária | Dr. Érico Diógenes — Fortaleza",
    metaDescription:
      "Dor e urgência ao urinar são sinais de alerta da próstata. Tratamento definitivo com HoLEP em Fortaleza. Agende com Dr. Érico Diógenes, +21 anos de experiência.",
    testimonialHeadline: "A palavra de quem viveu: antes e depois do tratamento definitivo",
    faqHeadline: "Dúvidas comuns, respostas honestas",
    ctaText: "Acabar com a dor ao urinar — agendar consulta",
  },
  {
    id: 5,
    slug: "desistir-viajar-prostata-fortaleza",
    categoria: "Dor/Incômodo",
    heroTitle: "Você já desistiu de viajar por causa da próstata?",
    heroSubtitle:
      "De passeios longos, de aproveitar a vida? Isso tem solução definitiva. O HoLEP devolve tudo isso.",
    metaTitle: "Próstata Impedindo Sua Vida? Tratamento em Fortaleza | Dr. Érico",
    metaDescription:
      "Desistiu de viajar por causa da urgência urinária? A próstata não precisa dominar sua vida. Conheça o HoLEP com Dr. Érico Diógenes em Fortaleza.",
    testimonialHeadline: "5 estrelas de quem não aceitava viver preso ao banheiro",
    faqHeadline: "O que você precisa saber sobre o tratamento definitivo",
    ctaText: "Voltar a viajar sem medo — falar com especialista",
  },
  // 6–10 Solução Definitiva
  {
    id: 6,
    slug: "tratamento-definitivo-jato-fraco-fortaleza",
    categoria: "Solução Definitiva",
    heroTitle: "Tem tratamento definitivo para o jato fraco e noites acordando.",
    heroSubtitle:
      "E não é remédio para sempre. O HoLEP é o padrão-ouro mundial disponível agora em Fortaleza.",
    metaTitle: "Tratamento Definitivo Próstata Fortaleza | HoLEP Dr. Érico Diógenes",
    metaDescription:
      "Pare de depender de remédios. HoLEP é o tratamento definitivo para jato fraco e noctúria. Dr. Érico Diógenes, especialista certificado em Fortaleza-CE.",
    testimonialHeadline: "Depoimentos de quem descobriu que não precisava sofrer mais",
    faqHeadline: "Tire suas dúvidas antes de dar o primeiro passo",
    ctaText: "Quero tratamento definitivo — falar com Dr. Érico",
  },
  {
    id: 7,
    slug: "dormir-noite-sem-acordar-holep-fortaleza",
    categoria: "Solução Definitiva",
    heroTitle: "Imagine dormir a noite toda sem acordar para urinar.",
    heroSubtitle:
      "O HoLEP torna isso realidade. Tecnologia laser, sem cortes externos, recuperação em 24–48h.",
    metaTitle: "Dormir Sem Acordar para Urinar — HoLEP Fortaleza | Dr. Érico",
    metaDescription:
      "Noctúria por HPB tem solução. Com HoLEP você volta a dormir a noite toda. Dr. Érico Diógenes, referência em cirurgia laser prostática em Fortaleza.",
    testimonialHeadline: "O que dizem os pacientes que dormem a noite toda agora",
    faqHeadline: "O que todo homem pergunta antes de fazer HoLEP",
    ctaText: "Quero dormir a noite toda — agendar avaliação",
  },
  {
    id: 8,
    slug: "urinar-normalmente-sem-remedios-fortaleza",
    categoria: "Solução Definitiva",
    heroTitle: "Liberdade para urinar normalmente de novo.",
    heroSubtitle:
      "Sem medo, sem dor, sem remédios diários. O HoLEP resolve o problema na origem.",
    metaTitle: "Urinar Normalmente Sem Remédios | HoLEP Fortaleza — Dr. Érico",
    metaDescription:
      "Chega de remédios diários para a próstata. HoLEP resolve o problema na origem. Dr. Érico Diógenes, urologista especialista em HoLEP em Fortaleza-CE.",
    testimonialHeadline: "Você não está sozinho: centenas de homens já resolveram isso",
    faqHeadline: "Respostas diretas para você decidir com segurança",
    ctaText: "Parar de tomar remédios — falar com especialista",
  },
  {
    id: 9,
    slug: "tecnologia-laser-prostata-fortaleza",
    categoria: "Solução Definitiva",
    heroTitle: "A tecnologia laser que devolve sua próstata ao tamanho normal.",
    heroSubtitle:
      "E sua vida de volta. HoLEP: padrão-ouro mundial agora em Fortaleza com quem tem +21 anos.",
    metaTitle: "Cirurgia Laser Próstata Fortaleza | HoLEP Dr. Érico Diógenes",
    metaDescription:
      "HoLEP — enucleação prostática a laser. Tecnologia padrão-ouro mundial disponível em Fortaleza com Dr. Érico Diógenes, +21 anos de experiência.",
    testimonialHeadline: "A prova de que a qualidade de vida pode voltar — e rápido",
    faqHeadline: "Dúvidas comuns, respostas honestas",
    ctaText: "Conhecer a tecnologia laser — falar com Dr. Érico",
  },
  {
    id: 10,
    slug: "solucao-definitiva-prostata-fortaleza",
    categoria: "Solução Definitiva",
    heroTitle: "Não aceite viver preso ao banheiro.",
    heroSubtitle:
      "Existe solução definitiva com resultado duradouro. HoLEP, ThULEP e MiLEP disponíveis em Fortaleza.",
    metaTitle: "Solução Definitiva HPB Fortaleza | HoLEP ThULEP MiLEP — Dr. Érico",
    metaDescription:
      "Não aceite viver refém da próstata. HoLEP, ThULEP e MiLEP: técnicas de referência internacional com Dr. Érico Diógenes em Fortaleza. Resultado duradouro.",
    testimonialHeadline: "Fortaleza confia: +21 anos transformando vidas masculinas",
    faqHeadline: "O que você precisa saber sobre o tratamento definitivo",
    ctaText: "Conhecer minha melhor opção — agendar agora",
  },
  // 11–15 Resultado/Transformação
  {
    id: 11,
    slug: "alta-24h-holep-fortaleza",
    categoria: "Resultado/Transformação",
    heroTitle: "Em 24–48h você vai para casa. Em dias, volta a viver.",
    heroSubtitle:
      "Sem limitações, sem longos períodos de internação. O HoLEP tem a menor morbidade entre as técnicas disponíveis.",
    metaTitle: "Alta em 24h Após HoLEP Fortaleza | Dr. Érico Diógenes Urologista",
    metaDescription:
      "Alta hospitalar em 24–48h após HoLEP. Recuperação rápida, resultado definitivo. Dr. Érico Diógenes, urologista especialista em cirurgia laser em Fortaleza-CE.",
    testimonialHeadline: "A prova de que a qualidade de vida pode voltar — e rápido",
    faqHeadline: "Tire suas dúvidas antes de dar o primeiro passo",
    ctaText: "Quero alta rápida — entender o procedimento",
  },
  {
    id: 12,
    slug: "parar-contar-banheiros-fortaleza",
    categoria: "Resultado/Transformação",
    heroTitle: "Pare de contar banheiros. Comece a contar as noites bem dormidas.",
    heroSubtitle:
      "A transformação começa com uma avaliação. HoLEP: resultado que você sente desde os primeiros dias.",
    metaTitle: "Parar Urgência Urinária Próstata Fortaleza | Dr. Érico HoLEP",
    metaDescription:
      "Pare de mapear banheiros. Com HoLEP em Fortaleza você recupera o controle. Dr. Érico Diógenes, +21 anos transformando vidas com cirurgia prostática.",
    testimonialHeadline: "Histórias reais de homens que recuperaram o sono e a liberdade",
    faqHeadline: "O que todo homem pergunta antes de fazer HoLEP",
    ctaText: "Quero parar de contar banheiros — falar agora",
  },
  {
    id: 13,
    slug: "urinar-como-jovem-holep-fortaleza",
    categoria: "Resultado/Transformação",
    heroTitle: "Voltar a fazer xixi como quando tinha 20 anos.",
    heroSubtitle:
      "Isso é possível com o HoLEP. Enucleação prostática a laser — remove o tecido obstrutivo de vez.",
    metaTitle: "Recuperar Fluxo Urinário Normal | HoLEP Fortaleza — Dr. Érico",
    metaDescription:
      "Quer urinar com força novamente? HoLEP restaura o fluxo urinário de forma definitiva. Dr. Érico Diógenes, urologista especialista em Fortaleza-CE.",
    testimonialHeadline: "Mais de 150 pacientes em Fortaleza já transformaram suas vidas",
    faqHeadline: "Respostas diretas para você decidir com segurança",
    ctaText: "Recuperar meu fluxo urinário — agendar avaliação",
  },
  {
    id: 14,
    slug: "remover-prostata-recuperar-sono-fortaleza",
    categoria: "Resultado/Transformação",
    heroTitle: "Remova a próstata que te atrapalha. Recupere o sono e a confiança.",
    heroSubtitle:
      "Da urgência constante ao controle total. O HoLEP é minimamente invasivo e sem cortes externos.",
    metaTitle: "Remover Tecido Prostático com Laser Fortaleza | Dr. Érico HoLEP",
    metaDescription:
      "HoLEP remove o tecido prostático obstrutivo por via natural. Recupere sono, disposição e confiança. Dr. Érico Diógenes, urologista em Fortaleza-CE.",
    testimonialHeadline: "O que dizem os pacientes que dormem a noite toda agora",
    faqHeadline: "Dúvidas comuns, respostas honestas",
    ctaText: "Quero recuperar minha confiança — falar com Dr. Érico",
  },
  {
    id: 15,
    slug: "controle-total-urinario-fortaleza",
    categoria: "Resultado/Transformação",
    heroTitle: "Da urgência constante para o controle total.",
    heroSubtitle:
      "A transformação começa com um diagnóstico. Agende sua avaliação com Dr. Érico Diógenes em Fortaleza.",
    metaTitle: "Controle Urinário com HoLEP Fortaleza | Dr. Érico Diógenes",
    metaDescription:
      "Recupere o controle urinário com HoLEP. Sem urgência, sem gotejamento, sem noites mal dormidas. Dr. Érico Diógenes, especialista em Fortaleza-CE.",
    testimonialHeadline: "5 estrelas de quem não aceitava viver preso ao banheiro",
    faqHeadline: "O que você precisa saber sobre o tratamento definitivo",
    ctaText: "Recuperar meu controle urinário — falar agora",
  },
  // 16–20 Autoridade/Credibilidade
  {
    id: 16,
    slug: "padrao-ouro-mundial-prostata-fortaleza",
    categoria: "Autoridade/Credibilidade",
    heroTitle: "Padrão-ouro mundial no tratamento da próstata.",
    heroSubtitle:
      "Agora disponível em Fortaleza com quem tem +21 anos de experiência. Dr. Érico Diógenes.",
    metaTitle: "Padrão-Ouro HoLEP Fortaleza | Dr. Érico Diógenes +21 Anos",
    metaDescription:
      "Padrão-ouro mundial no tratamento da HPB agora em Fortaleza. Dr. Érico Diógenes: +21 anos de experiência, certificado em HoLEP, ThULEP e MiLEP.",
    testimonialHeadline: "Fortaleza confia: +21 anos transformando vidas masculinas",
    faqHeadline: "Tire suas dúvidas antes de dar o primeiro passo",
    ctaText: "Conhecer o padrão-ouro — agendar avaliação",
  },
  {
    id: 17,
    slug: "holep-thulep-milep-fortaleza",
    categoria: "Autoridade/Credibilidade",
    heroTitle: "HoLEP, ThULEP e MiLEP: técnicas de referência internacional.",
    heroSubtitle:
      "Aplicadas por especialista certificado em Fortaleza. Dr. Érico Diógenes — urologista com doutorado pela USP.",
    metaTitle: "HoLEP ThULEP MiLEP em Fortaleza | Dr. Érico Diógenes Urologista",
    metaDescription:
      "HoLEP, ThULEP e MiLEP disponíveis em Fortaleza com Dr. Érico Diógenes. Técnicas internacionais aplicadas por especialista certificado com doutorado USP.",
    testimonialHeadline: "A palavra de quem viveu: antes e depois do tratamento definitivo",
    faqHeadline: "O que todo homem pergunta antes de fazer HoLEP",
    ctaText: "Quero saber qual técnica é ideal para mim",
  },
  {
    id: 18,
    slug: "tecnologia-ponta-prostata-fortaleza",
    categoria: "Autoridade/Credibilidade",
    heroTitle: "Tecnologia que apenas poucos centros no Brasil oferecem.",
    heroSubtitle:
      "Aqui, é padrão. Dr. Érico Diógenes, pioneiro no HoLEP e Cirurgia Robótica no Nordeste.",
    metaTitle: "Centro Referência HoLEP Nordeste | Dr. Érico Diógenes Fortaleza",
    metaDescription:
      "Centro de referência em cirurgia prostática laser no Nordeste. Dr. Érico Diógenes, pioneiro em HoLEP na região, com tecnologia dos melhores hospitais do mundo.",
    testimonialHeadline: "Você não está sozinho: centenas de homens já resolveram isso",
    faqHeadline: "Respostas diretas para você decidir com segurança",
    ctaText: "Conhecer o centro de referência — falar com Dr. Érico",
  },
  {
    id: 19,
    slug: "resultado-definitivo-baixa-morbidade-fortaleza",
    categoria: "Autoridade/Credibilidade",
    heroTitle: "Resultado definitivo, baixa morbidade, alta experiência.",
    heroSubtitle:
      "Tratamento de referência para quem não aceita viver mal. Dr. Érico Diógenes, doutorado USP.",
    metaTitle: "HPB com Baixa Morbidade Fortaleza | HoLEP Dr. Érico Diógenes",
    metaDescription:
      "Resultado definitivo para HPB com baixa taxa de complicações. HoLEP com Dr. Érico Diógenes, doutor pela USP e referência em cirurgia laser em Fortaleza.",
    testimonialHeadline: "Depoimentos de quem descobriu que não precisava sofrer mais",
    faqHeadline: "Dúvidas comuns, respostas honestas",
    ctaText: "Tratamento com alta experiência — agendar agora",
  },
  {
    id: 20,
    slug: "melhores-hospitais-mundo-fortaleza",
    categoria: "Autoridade/Credibilidade",
    heroTitle: "Escolha usada nos melhores hospitais do mundo.",
    heroSubtitle:
      "Agora na sua cidade, com mãos experientes. Dr. Érico Diógenes — fellowship no Albert Einstein e na França.",
    metaTitle: "Cirurgia Prostática Padrão Internacional Fortaleza | Dr. Érico",
    metaDescription:
      "O mesmo padrão dos melhores hospitais do mundo agora em Fortaleza. Dr. Érico Diógenes: fellowship Albert Einstein, Clinique Saint Augustin (França), doutorado USP.",
    testimonialHeadline: "A prova de que a qualidade de vida pode voltar — e rápido",
    faqHeadline: "O que você precisa saber sobre o tratamento definitivo",
    ctaText: "Cirurgia padrão mundial em Fortaleza — falar agora",
  },
  // 21–25 Urgência/Decisão
  {
    id: 21,
    slug: "adiar-tratamento-prostata-fortaleza",
    categoria: "Urgência/Decisão",
    heroTitle: "Quanto tempo mais você vai adiar?",
    heroSubtitle:
      "A próstata aumentada não espera — mas também não define seu futuro. Aja agora, antes que piore.",
    metaTitle: "Não Adie o Tratamento da Próstata | HoLEP Fortaleza — Dr. Érico",
    metaDescription:
      "HPB piora com o tempo. Quanto mais cedo tratar, mais rápida a recuperação. Dr. Érico Diógenes, especialista em HoLEP em Fortaleza. Agende agora.",
    testimonialHeadline: "5 estrelas de quem não aceitava viver preso ao banheiro",
    faqHeadline: "Tire suas dúvidas antes de dar o primeiro passo",
    ctaText: "Não quero adiar mais — agendar avaliação",
  },
  {
    id: 22,
    slug: "parar-sofrer-prostata-fortaleza",
    categoria: "Urgência/Decisão",
    heroTitle: "Hoje é o dia de parar de sofrer com isso.",
    heroSubtitle:
      "A solução existe e está a um clique de distância. Agende sua avaliação com Dr. Érico Diógenes.",
    metaTitle: "Parar de Sofrer com Próstata Fortaleza | HoLEP Dr. Érico",
    metaDescription:
      "Chega de sofrer com HPB. Existe solução definitiva com HoLEP. Dr. Érico Diógenes, urologista referência em Fortaleza. Agende sua avaliação hoje.",
    testimonialHeadline: "Fortaleza confia: +21 anos transformando vidas masculinas",
    faqHeadline: "O que todo homem pergunta antes de fazer HoLEP",
    ctaText: "Parar de sofrer hoje — falar com Dr. Érico",
  },
  {
    id: 23,
    slug: "prostata-aumentando-tratar-logo-fortaleza",
    categoria: "Urgência/Decisão",
    heroTitle: "Não deixe que a próstata aumente mais.",
    heroSubtitle:
      "Quanto antes tratar, mais rápida a recuperação. O HoLEP é possível mesmo para próstatas grandes.",
    metaTitle: "Tratar HPB Antes Que Piore — HoLEP Fortaleza | Dr. Érico",
    metaDescription:
      "HPB progressiva: trate antes que piore. HoLEP funciona mesmo para próstatas grandes. Dr. Érico Diógenes, especialista certificado em Fortaleza-CE.",
    testimonialHeadline: "O que quem já fez HoLEP diz sobre o resultado",
    faqHeadline: "Respostas diretas para você decidir com segurança",
    ctaText: "Tratar antes que piore — agendar agora",
  },
  {
    id: 24,
    slug: "quantas-noites-perdidas-prostata-fortaleza",
    categoria: "Urgência/Decisão",
    heroTitle: "Você já perdeu quantas noites de sono?",
    heroSubtitle:
      "Quantas mais até decidir cuidar de si? O HoLEP resolve — e você volta para casa em 24–48h.",
    metaTitle: "Noctúria por HPB Fortaleza | Tratamento HoLEP Dr. Érico Diógenes",
    metaDescription:
      "Noctúria (acordar para urinar à noite) tem solução. HoLEP em Fortaleza com Dr. Érico Diógenes. Alta em 24–48h. Agende sua avaliação.",
    testimonialHeadline: "Histórias reais de homens que recuperaram o sono e a liberdade",
    faqHeadline: "Dúvidas comuns, respostas honestas",
    ctaText: "Acabar com noites mal dormidas — falar agora",
  },
  {
    id: 25,
    slug: "momento-de-agir-prostata-fortaleza",
    categoria: "Urgência/Decisão",
    heroTitle: "O momento de agir é agora.",
    heroSubtitle:
      "Seu futuro com mais qualidade de vida começa com essa decisão. Agende sua avaliação hoje.",
    metaTitle: "Agendar Avaliação HoLEP Fortaleza | Dr. Érico Diógenes Urologista",
    metaDescription:
      "Não espere mais. Agende sua avaliação para HoLEP com Dr. Érico Diógenes em Fortaleza. +21 anos de experiência, padrão-ouro internacional.",
    testimonialHeadline: "A palavra de quem viveu: antes e depois do tratamento definitivo",
    faqHeadline: "O que você precisa saber sobre o tratamento definitivo",
    ctaText: "O momento é agora — agendar minha avaliação",
  },
  // 26–30 Pergunta/Engajamento
  {
    id: 26,
    slug: "sinais-prostata-aumentada-fortaleza",
    categoria: "Pergunta/Engajamento",
    heroTitle: "Você reconhece estes sinais?",
    heroSubtitle:
      "Jato fraco, vontade frequente, noites interrompidas. São sintomas de HPB — e têm tratamento definitivo.",
    metaTitle: "Sinais de Próstata Aumentada (HPB) Fortaleza | Dr. Érico HoLEP",
    metaDescription:
      "Reconhece os sinais de próstata aumentada? Jato fraco, noctúria, urgência. HoLEP resolve de forma definitiva. Dr. Érico Diógenes, especialista em Fortaleza.",
    testimonialHeadline: "Mais de 150 pacientes em Fortaleza já transformaram suas vidas",
    faqHeadline: "Tire suas dúvidas antes de dar o primeiro passo",
    ctaText: "Verificar meus sintomas — falar com especialista",
  },
  {
    id: 27,
    slug: "ultima-vez-dormiu-noite-toda-fortaleza",
    categoria: "Pergunta/Engajamento",
    heroTitle: "Quando foi a última vez que dormiu a noite toda?",
    heroSubtitle:
      "Sem acordar para ir ao banheiro. O HoLEP devolve seu sono — e muito mais.",
    metaTitle: "Acordar Várias Vezes à Noite para Urinar | HoLEP Fortaleza Dr. Érico",
    metaDescription:
      "Noctúria frequente? Não precisa ser assim. HoLEP trata a causa. Dr. Érico Diógenes, especialista em cirurgia laser prostática em Fortaleza-CE.",
    testimonialHeadline: "O que dizem os pacientes que dormem a noite toda agora",
    faqHeadline: "O que todo homem pergunta antes de fazer HoLEP",
    ctaText: "Quero dormir a noite toda — entender o HoLEP",
  },
  {
    id: 28,
    slug: "vida-em-torno-do-banheiro-fortaleza",
    categoria: "Pergunta/Engajamento",
    heroTitle: "Sua vida gira em torno da próxima ida ao banheiro?",
    heroSubtitle:
      "Não precisa ser assim. O HoLEP remove a obstrução prostática de vez, com recuperação ultra-rápida.",
    metaTitle: "Urgência Urinária HPB Fortaleza — Solução Definitiva | Dr. Érico",
    metaDescription:
      "Cansado de planejar tudo em torno do banheiro? HPB tem solução definitiva. HoLEP com Dr. Érico Diógenes, urologista especialista em Fortaleza.",
    testimonialHeadline: "Depoimentos de quem descobriu que não precisava sofrer mais",
    faqHeadline: "Respostas diretas para você decidir com segurança",
    ctaText: "Acabar com essa limitação — agendar avaliação",
  },
  {
    id: 29,
    slug: "remedios-nao-resolveram-holep-fortaleza",
    categoria: "Pergunta/Engajamento",
    heroTitle: "Já tentou remédios que não resolveram?",
    heroSubtitle:
      "E se a solução definitiva fosse mais simples do que imagina? O HoLEP age na causa — não mascara.",
    metaTitle: "Remédios Para Próstata Não Resolveram? HoLEP Fortaleza | Dr. Érico",
    metaDescription:
      "Cansado de remédios que não resolvem a HPB? HoLEP trata a causa definitivamente. Dr. Érico Diógenes, urologista em Fortaleza. Sem cirurgia aberta.",
    testimonialHeadline: "Você não está sozinho: centenas de homens já resolveram isso",
    faqHeadline: "Dúvidas comuns, respostas honestas",
    ctaText: "Substituir remédios por solução definitiva — falar",
  },
  {
    id: 30,
    slug: "o-que-e-holep-fortaleza",
    categoria: "Pergunta/Engajamento",
    heroTitle: "Você sabe o que é HoLEP?",
    heroSubtitle:
      "Descubra por que milhares de homens escolheram essa tecnologia. Disponível em Fortaleza com Dr. Érico.",
    metaTitle: "O que é HoLEP? Cirurgia Laser Próstata Fortaleza | Dr. Érico Diógenes",
    metaDescription:
      "O que é HoLEP (enucleação prostática a laser)? Entenda por que é o padrão-ouro mundial e conheça o especialista Dr. Érico Diógenes em Fortaleza-CE.",
    testimonialHeadline: "A prova de que a qualidade de vida pode voltar — e rápido",
    faqHeadline: "O que você precisa saber sobre o tratamento definitivo",
    ctaText: "Quero entender o HoLEP — falar com Dr. Érico",
  },
  // 31–35 Dados/Estatísticas
  {
    id: 31,
    slug: "21-anos-experiencia-holep-fortaleza",
    categoria: "Dados/Estatísticas",
    heroTitle: "+21 anos de experiência. Zero incisões abdominais.",
    heroSubtitle:
      "Milhares de procedimentos com resultado que você pode confiar. Dr. Érico Diógenes, referência em Fortaleza.",
    metaTitle: "+21 Anos Experiência Urologia Fortaleza | Dr. Érico Diógenes HoLEP",
    metaDescription:
      "+21 anos de experiência em urologia. Dr. Érico Diógenes, referência em HoLEP sem cortes abdominais em Fortaleza-CE. Agende sua avaliação.",
    testimonialHeadline: "Fortaleza confia: +21 anos transformando vidas masculinas",
    faqHeadline: "Tire suas dúvidas antes de dar o primeiro passo",
    ctaText: "+21 anos de expertise — agendar minha avaliação",
  },
  {
    id: 32,
    slug: "5-estrelas-google-holep-fortaleza",
    categoria: "Dados/Estatísticas",
    heroTitle: "5 estrelas em avaliações de pacientes.",
    heroSubtitle:
      "Pacientes que recuperaram a qualidade de vida em dias, não meses. Dr. Érico Diógenes, Fortaleza.",
    metaTitle: "Urologista 5 Estrelas Fortaleza | HoLEP Dr. Érico Diógenes",
    metaDescription:
      "5 estrelas no Google. Dr. Érico Diógenes, urologista referência em HoLEP em Fortaleza-CE. Pacientes que recuperaram qualidade de vida em dias.",
    testimonialHeadline: "5 estrelas de quem não aceitava viver preso ao banheiro",
    faqHeadline: "O que todo homem pergunta antes de fazer HoLEP",
    ctaText: "Ver por que 5 estrelas — agendar avaliação",
  },
  {
    id: 33,
    slug: "recuperacao-24h-holep-fortaleza",
    categoria: "Dados/Estatísticas",
    heroTitle: "Recuperação em 24–48h. Retorno rápido às atividades.",
    heroSubtitle:
      "Tecnologia que preserva seu tempo. HoLEP, padrão-ouro para HPB, agora em Fortaleza.",
    metaTitle: "Recuperação Rápida HoLEP 24h Fortaleza | Dr. Érico Diógenes",
    metaDescription:
      "Alta em 24–48h após HoLEP. Retorno rápido às atividades. Dr. Érico Diógenes, especialista em cirurgia prostática laser em Fortaleza-CE.",
    testimonialHeadline: "A prova de que a qualidade de vida pode voltar — e rápido",
    faqHeadline: "Respostas diretas para você decidir com segurança",
    ctaText: "Alta em 24h — entender como funciona",
  },
  {
    id: 34,
    slug: "numeros-holep-fortaleza",
    categoria: "Dados/Estatísticas",
    heroTitle: "21+ anos. 5 estrelas. Resultados que mudam vidas.",
    heroSubtitle:
      "Sua próstata merece essa expertise. Dr. Érico Diógenes, urologista referência em Fortaleza.",
    metaTitle: "Resultados HoLEP Fortaleza | Dr. Érico Diógenes 21 Anos 5 Estrelas",
    metaDescription:
      "21+ anos de experiência, 5 estrelas Google, alta em 24–48h. Dr. Érico Diógenes, referência em HoLEP em Fortaleza. Números que comprovam resultados.",
    testimonialHeadline: "O que quem já fez HoLEP diz sobre o resultado",
    faqHeadline: "Dúvidas comuns, respostas honestas",
    ctaText: "Números reais — agendar minha avaliação",
  },
  {
    id: 35,
    slug: "baixa-complicacao-holep-fortaleza",
    categoria: "Dados/Estatísticas",
    heroTitle: "Baixa taxa de complicações, alta taxa de satisfação.",
    heroSubtitle:
      "Números que comprovam o padrão-ouro. HoLEP com Dr. Érico Diógenes, doutorado USP.",
    metaTitle: "HoLEP Seguro e Eficaz Fortaleza | Dr. Érico Diógenes Urologista",
    metaDescription:
      "HoLEP: baixa taxa de complicações e alta satisfação. Padrão-ouro mundial em Fortaleza com Dr. Érico Diógenes, doutor pela USP.",
    testimonialHeadline: "Você não está sozinho: centenas de homens já resolveram isso",
    faqHeadline: "O que você precisa saber sobre o tratamento definitivo",
    ctaText: "Segurança comprovada — agendar avaliação",
  },
  // 36–40 Emocional/Vida Plena
  {
    id: 36,
    slug: "dormir-tranquilo-viajar-fortaleza",
    categoria: "Emocional/Vida Plena",
    heroTitle: "Você merece dormir tranquilo. Merece viajar sem medo.",
    heroSubtitle:
      "Merece viver sem limitações. O HoLEP devolve tudo isso — com tecnologia e cuidado humano.",
    metaTitle: "Qualidade de Vida com HPB Tratada Fortaleza | HoLEP Dr. Érico",
    metaDescription:
      "Volte a dormir, viajar e viver sem limitações. HoLEP em Fortaleza com Dr. Érico Diógenes. Resultado definitivo, recuperação em 24–48h.",
    testimonialHeadline: "Histórias reais de homens que recuperaram o sono e a liberdade",
    faqHeadline: "Tire suas dúvidas antes de dar o primeiro passo",
    ctaText: "Mereço viver melhor — agendar avaliação",
  },
  {
    id: 37,
    slug: "noites-com-esposa-holep-fortaleza",
    categoria: "Emocional/Vida Plena",
    heroTitle: "Recupere as noites — dormindo bem, sem acordar toda hora.",
    heroSubtitle:
      "Sua vida íntima e seu relacionamento merecem isso. HoLEP preserva a função e devolve o sono.",
    metaTitle: "Recuperar Sono e Relacionamento com HoLEP Fortaleza | Dr. Érico",
    metaDescription:
      "HoLEP melhora qualidade do sono e da vida íntima. Tratamento definitivo para HPB em Fortaleza com Dr. Érico Diógenes, +21 anos de experiência.",
    testimonialHeadline: "A palavra de quem viveu: antes e depois do tratamento definitivo",
    faqHeadline: "O que todo homem pergunta antes de fazer HoLEP",
    ctaText: "Recuperar minha qualidade de vida — falar agora",
  },
  {
    id: 38,
    slug: "homem-sem-banheiro-fortaleza",
    categoria: "Emocional/Vida Plena",
    heroTitle: "Volte a ser o homem que não planeja o dia em torno do banheiro.",
    heroSubtitle:
      "Com HoLEP em Fortaleza você recupera a liberdade — e a autoestima que a HPB roubou.",
    metaTitle: "HPB Roubando Sua Liberdade? HoLEP Fortaleza | Dr. Érico Diógenes",
    metaDescription:
      "A HPB não define quem você é. Recupere liberdade e autoestima com HoLEP. Dr. Érico Diógenes, urologista especialista em Fortaleza-CE.",
    testimonialHeadline: "Depoimentos de quem descobriu que não precisava sofrer mais",
    faqHeadline: "Respostas diretas para você decidir com segurança",
    ctaText: "Recuperar minha liberdade — falar com Dr. Érico",
  },
  {
    id: 39,
    slug: "familia-presente-holep-fortaleza",
    categoria: "Emocional/Vida Plena",
    heroTitle: "Sua família quer você presente, não irritado por dormir mal.",
    heroSubtitle:
      "Mude isso agora. HoLEP resolve a HPB de forma definitiva — e você volta para os seus.",
    metaTitle: "Próstata Afetando Sua Família? HoLEP Fortaleza | Dr. Érico",
    metaDescription:
      "HPB afeta toda a família. Trate de vez com HoLEP e volte a ser quem os seus precisam. Dr. Érico Diógenes, urologista em Fortaleza. Agende agora.",
    testimonialHeadline: "5 estrelas de quem não aceitava viver preso ao banheiro",
    faqHeadline: "Dúvidas comuns, respostas honestas",
    ctaText: "Voltar para minha família em plena forma — agendar",
  },
  {
    id: 40,
    slug: "liberdade-viver-sem-urgencia-fortaleza",
    categoria: "Emocional/Vida Plena",
    heroTitle: "A liberdade de rir, tossir, viver — sem medo da urgência.",
    heroSubtitle:
      "Isso é viver bem. O HoLEP devolve esse controle. Minimamente invasivo, resultado definitivo.",
    metaTitle: "Viver Sem Urgência Urinária Fortaleza | HoLEP Dr. Érico Diógenes",
    metaDescription:
      "Rir, tossir e viver sem urgência urinária. HoLEP em Fortaleza com Dr. Érico Diógenes resolve a HPB de vez. Agende sua avaliação.",
    testimonialHeadline: "A prova de que a qualidade de vida pode voltar — e rápido",
    faqHeadline: "O que você precisa saber sobre o tratamento definitivo",
    ctaText: "Viver sem urgência — entender o HoLEP",
  },
  // 41–45 Comparação/Diferenciação
  {
    id: 41,
    slug: "cirurgia-aberta-passado-holep-fortaleza",
    categoria: "Comparação/Diferenciação",
    heroTitle: "Cirurgia aberta é coisa do passado.",
    heroSubtitle:
      "HoLEP é o futuro — e está disponível para você hoje em Fortaleza. Sem cortes, sem longas internações.",
    metaTitle: "HoLEP vs Cirurgia Aberta Próstata Fortaleza | Dr. Érico Diógenes",
    metaDescription:
      "Cirurgia aberta para próstata é obsoleta. HoLEP: sem cortes externos, alta em 24–48h. Dr. Érico Diógenes, especialista em técnicas avançadas em Fortaleza.",
    testimonialHeadline: "O que quem já fez HoLEP diz sobre o resultado",
    faqHeadline: "Tire suas dúvidas antes de dar o primeiro passo",
    ctaText: "Preferir o futuro da urologia — agendar agora",
  },
  {
    id: 42,
    slug: "remedios-mascaram-holep-resolve-fortaleza",
    categoria: "Comparação/Diferenciação",
    heroTitle: "Remédios mascaram. HoLEP resolve.",
    heroSubtitle:
      "Escolha o tratamento definitivo que não depende de comprimidos diários. Fortaleza, Dr. Érico Diógenes.",
    metaTitle: "HoLEP vs Remédios para Próstata Fortaleza | Dr. Érico Diógenes",
    metaDescription:
      "Remédios para HPB mascaram os sintomas; HoLEP resolve na raiz. Sem dependência de comprimidos. Dr. Érico Diógenes, urologista em Fortaleza.",
    testimonialHeadline: "Você não está sozinho: centenas de homens já resolveram isso",
    faqHeadline: "O que todo homem pergunta antes de fazer HoLEP",
    ctaText: "Largar os remédios de vez — falar com Dr. Érico",
  },
  {
    id: 43,
    slug: "holep-vs-turp-fortaleza",
    categoria: "Comparação/Diferenciação",
    heroTitle: "TURP tradicional? Mais sangramento, mais recuperação.",
    heroSubtitle:
      "HoLEP: precisão laser, volta rápida. O padrão-ouro superou a TURP nos principais estudos mundiais.",
    metaTitle: "HoLEP vs TURP Próstata Fortaleza | Dr. Érico Diógenes Urologista",
    metaDescription:
      "HoLEP supera a TURP em sangramento, tempo de internação e resultados. Disponível em Fortaleza com Dr. Érico Diógenes, especialista certificado.",
    testimonialHeadline: "Fortaleza confia: +21 anos transformando vidas masculinas",
    faqHeadline: "Respostas diretas para você decidir com segurança",
    ctaText: "Entender por que HoLEP > TURP — falar agora",
  },
  {
    id: 44,
    slug: "independente-de-remedios-holep-fortaleza",
    categoria: "Comparação/Diferenciação",
    heroTitle: "Não aceite viver dependendo de remédios.",
    heroSubtitle:
      "Existe solução definitiva com alta tecnologia. HoLEP em Fortaleza — sem cirurgia aberta, sem remédios.",
    metaTitle: "Independência de Remédios para Próstata | HoLEP Fortaleza Dr. Érico",
    metaDescription:
      "Pare de depender de remédios para a próstata. HoLEP é solução definitiva de alta tecnologia em Fortaleza. Dr. Érico Diógenes, +21 anos de experiência.",
    testimonialHeadline: "Histórias reais de homens que recuperaram o sono e a liberdade",
    faqHeadline: "Dúvidas comuns, respostas honestas",
    ctaText: "Independência de remédios — agendar avaliação",
  },
  {
    id: 45,
    slug: "cateter-curto-holep-fortaleza",
    categoria: "Comparação/Diferenciação",
    heroTitle: "Cateter por dias ou semanas? Com HoLEP, muito menos.",
    heroSubtitle:
      "A recuperação é tão rápida que você se surpreende. Alta em 24–48h e sonda retirada logo na internação.",
    metaTitle: "Cateter Pós HoLEP Curto Fortaleza | Dr. Érico Diógenes Urologista",
    metaDescription:
      "Com HoLEP o cateter fica apenas 1–2 dias, retirado antes da alta. Dr. Érico Diógenes, especialista em cirurgia prostática laser em Fortaleza-CE.",
    testimonialHeadline: "A palavra de quem viveu: antes e depois do tratamento definitivo",
    faqHeadline: "O que você precisa saber sobre o tratamento definitivo",
    ctaText: "Entender sobre cateter no HoLEP — falar agora",
  },
  // 46–50 CTA Forte
  {
    id: 46,
    slug: "primeiro-passo-holep-fortaleza",
    categoria: "CTA Forte",
    heroTitle: "Dê o primeiro passo hoje.",
    heroSubtitle:
      "Sua próstata agradece, seu sono agradece, sua vida agradece. Agende com Dr. Érico Diógenes.",
    metaTitle: "Agendar Consulta HoLEP Fortaleza | Dr. Érico Diógenes Urologista",
    metaDescription:
      "Dê o primeiro passo hoje. Agende sua avaliação para HoLEP com Dr. Érico Diógenes em Fortaleza. Atendimento rápido via WhatsApp.",
    testimonialHeadline: "O que quem já fez HoLEP diz sobre o resultado",
    faqHeadline: "Tire suas dúvidas antes de dar o primeiro passo",
    ctaText: "Dar o primeiro passo — agendar agora",
  },
  {
    id: 47,
    slug: "agendar-avaliacao-holep-fortaleza",
    categoria: "CTA Forte",
    heroTitle: "Clique e agende sua avaliação.",
    heroSubtitle:
      "Em 24–48h você pode estar no caminho da cura definitiva. Dr. Érico Diógenes, Fortaleza.",
    metaTitle: "Agendar Avaliação HoLEP Dr. Érico Diógenes Fortaleza | Consulta",
    metaDescription:
      "Agende sua avaliação para HoLEP com Dr. Érico Diógenes em Fortaleza. Em 24–48h após a cirurgia você está em casa. Atendimento via WhatsApp.",
    testimonialHeadline: "Mais de 150 pacientes em Fortaleza já transformaram suas vidas",
    faqHeadline: "O que todo homem pergunta antes de fazer HoLEP",
    ctaText: "Agendar minha avaliação agora",
  },
  {
    id: 48,
    slug: "transformar-sua-vida-holep-fortaleza",
    categoria: "CTA Forte",
    heroTitle: "Não deixe para depois o que pode transformar sua vida hoje.",
    heroSubtitle:
      "Agende sua consulta agora. Atendimento rápido e discreto via WhatsApp. Dr. Érico Diógenes.",
    metaTitle: "Transformar Vida com HoLEP Fortaleza | Dr. Érico Diógenes",
    metaDescription:
      "Transforme sua vida com HoLEP hoje mesmo. Agende sua consulta com Dr. Érico Diógenes em Fortaleza. Atendimento discreto e humanizado via WhatsApp.",
    testimonialHeadline: "Depoimentos de quem descobriu que não precisava sofrer mais",
    faqHeadline: "Respostas diretas para você decidir com segurança",
    ctaText: "Transformar minha vida agora — agendar",
  },
  {
    id: 49,
    slug: "especialista-pronto-holep-fortaleza",
    categoria: "CTA Forte",
    heroTitle: "A solução existe. O especialista está pronto.",
    heroSubtitle:
      "Só falta você decidir. Comece agora — agende sua avaliação com Dr. Érico Diógenes em Fortaleza.",
    metaTitle: "Especialista HoLEP Fortaleza Pronto | Dr. Érico Diógenes Urologista",
    metaDescription:
      "O especialista em HoLEP está pronto para te atender em Fortaleza. Dr. Érico Diógenes, +21 anos de experiência. Agende agora via WhatsApp.",
    testimonialHeadline: "5 estrelas de quem não aceitava viver preso ao banheiro",
    faqHeadline: "Dúvidas comuns, respostas honestas",
    ctaText: "O especialista está pronto — falar agora",
  },
  {
    id: 50,
    slug: "chega-de-sofrer-holep-fortaleza",
    categoria: "CTA Forte",
    heroTitle: "Chega de sofrer. Chega de noites mal dormidas.",
    heroSubtitle:
      "Chega de viver pequeno. HoLEP em Fortaleza com Dr. Érico Diógenes. Agende agora.",
    metaTitle: "Chega de Sofrer com HPB Fortaleza | HoLEP Dr. Érico Diógenes",
    metaDescription:
      "Chega de sofrer com HPB. HoLEP resolve de vez em Fortaleza com Dr. Érico Diógenes. +21 anos, padrão-ouro, alta em 24–48h. Agende agora.",
    testimonialHeadline: "Fortaleza confia: +21 anos transformando vidas masculinas",
    faqHeadline: "O que você precisa saber sobre o tratamento definitivo",
    ctaText: "Chega de sofrer — agendar agora",
  },
];

export function getVariantBySlug(slug: string): LpVariant | undefined {
  return LP_VARIANTS.find((v) => v.slug === slug);
}
