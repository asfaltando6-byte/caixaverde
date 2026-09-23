import Image from "next/image";

const Check = () => <span className="check">✓</span>;
const CHECKOUT_URL = "https://pay.cakto.com.br/jv9uiic_1127615";
const CTA = ({ text = "QUERO APRENDER A MONTAR GÔNDOLAS" }: { text?: string }) => (
  <a className="cta" href="#bonus">{text} <b>→</b></a>
);

const principles = [
  ["Altura dos olhos", "Posicione os produtos prioritários onde o cliente vê primeiro."],
  ["Produtos complementares", "Aproxime itens que costumam ser comprados juntos."],
  ["Peso e volume", "Deixe embalagens pesadas e maiores nas prateleiras inferiores."],
  ["Giro da categoria", "Dê mais espaço para o que vende com frequência."],
  ["Compra por impulso", "Use o caixa para produtos pequenos e de decisão rápida."],
];

const carouselPages = [
  "/assets/layout-alimentos-basicos.webp",
  "/assets/layout-cafe-da-manha.webp",
  "/assets/layout-limpeza.webp",
  "/assets/layout-caixa.webp",
  "/assets/layout-snacks-bebidas.webp",
  "/assets/layout-higiene-pessoal.webp",
];

const productPages = [
  {
    image: "/assets/layout-alimentos-basicos.webp",
    title: "Alimentos básicos",
    description: "O PDF ensina como distribuir pesos, giro e produtos complementares.",
  },
  {
    image: "/assets/layout-cafe-da-manha.webp",
    title: "Café da manhã",
    description: "Aprenda a agrupar café, leite, açúcar e biscoitos pela ocasião de compra.",
  },
  {
    image: "/assets/layout-limpeza.webp",
    title: "Produtos de limpeza",
    description: "Veja como separar por uso e posicionar embalagens maiores nos níveis baixos.",
  },
  {
    image: "/assets/layout-caixa.webp",
    title: "Área do caixa",
    description: "Entenda como escolher e posicionar itens de compra rápida no pagamento.",
  },
  {
    image: "/assets/layout-snacks-bebidas.webp",
    title: "Snacks e bebidas",
    description: "O passo a passo mostra snacks ao alcance dos olhos e bebidas embaixo.",
  },
  {
    image: "/assets/layout-higiene-pessoal.webp",
    title: "Higiene pessoal",
    description: "Aprenda a organizar itens pequenos, categorias e volumes grandes na base.",
  },
];

const bonusItems = [
  { title: "Guia de Impulso para o Caixa", description: "Aprenda a organizar itens pequenos próximos ao pagamento.", value: "R$ 27,00", image: "/assets/layout-caixa.webp" },
  { title: "Guia de Produtos Complementares", description: "Combinações para aproximar itens comprados juntos.", value: "R$ 47,00", image: "/assets/layout-cafe-da-manha.webp" },
  { title: "Checklist de Reposição", description: "Mantenha cada gôndola organizada após a reposição.", value: "R$ 53,00", image: "/assets/layout-alimentos-basicos.webp" },
];

const purchaseExamples = [
  ["Ana P.", "Maceió, AL"],
  ["Carlos M.", "Recife, PE"],
  ["Juliana S.", "Aracaju, SE"],
];

export default function Home() {
  return <main>
    <div className="topbar" id="top">MANUAL PRÁTICO + 30 EXEMPLOS DE GÔNDOLAS</div>

    <section className="hero"><div className="shell heroGrid">
      <div className="heroCopy">
        <span className="eyebrow">● APRENDA A MONTAR CADA GÔNDOLA</span>
        <h1>Monte gôndolas organizadas seguindo um <em>passo a passo simples.</em></h1>
        <p>O manual ensina <strong>como posicionar cada categoria</strong>, dividir as prateleiras e aproximar produtos — com um exemplo visual em cada PDF.</p>
      </div>
      <div className="visual">
        <Image src="/assets/manual-gondola-mockup.webp" alt="Manual Gôndola Lucrativa com passo a passo e exemplos práticos" width={1254} height={1254} sizes="(max-width: 800px) 100vw, 50vw" quality={85} preload />
        <div className="mockupAction"><CTA />
          <div className="quick"><span><Check />Manual passo a passo</span><span><Check />Exemplo em cada PDF</span><span><Check />Para consultar ou imprimir</span></div>
          <small>Acesso ao manual completo por apenas <strong>R$ 37,00</strong></small>
        </div>
      </div>
    </div></section>

    <section className="section useSection" aria-labelledby="como-usar-titulo"><div className="shell">
      <div className="narrow center useHead"><span className="tag">COMO O MANUAL FUNCIONA</span><h2 id="como-usar-titulo">Aprenda, monte e adapte em <em>4 passos simples</em></h2><p className="lead">Cada PDF traz a explicação e um exemplo visual para aplicar na loja.</p></div>
      <div className="useGrid">{[
        ["01", "Escolha a categoria", "Abra o PDF de alimentos, limpeza, café, snacks, higiene ou caixa."],
        ["02", "Aprenda a lógica", "Veja o que vai em cada nível e por que aquela posição é indicada."],
        ["03", "Confira o exemplo", "Use a imagem pronta para visualizar a montagem antes de começar."],
        ["04", "Monte e adapte", "Aplique o passo a passo conforme seu espaço, mix e quantidade de produtos."],
      ].map(x => <article key={x[0]}><b>{x[0]}</b><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}</div>
      <div className="useNote"><Check /><span><strong>Você aprende o raciocínio.</strong> Depois, adapta o exemplo às gôndolas e aos produtos que já possui.</span></div>
    </div></section>

    <section className="section productShowcase" aria-labelledby="layouts-titulo"><div className="shell">
      <div className="narrow center head"><span className="tag">VEJA O MANUAL POR DENTRO</span><h2 id="layouts-titulo">Aprenda a montar e veja <em>um exemplo pronto</em></h2><p className="lead">Cada PDF explica a lógica da montagem e mostra como ela fica aplicada na gôndola.</p></div>
      <div className="productCarousel" aria-label="Seis exemplos práticos apresentados no manual"><div className="pagesTrack">{[...productPages, ...productPages].map((item, i) => <figure key={`${item.image}-${i}`} aria-hidden={i >= productPages.length}><Image src={item.image} alt={i < productPages.length ? `Exemplo do manual para montar a gôndola de ${item.title}` : ""} width={1122} height={1402} sizes="(max-width: 560px) 78vw, 260px" quality={76} /><figcaption><span><Check />{item.title}</span><p>{item.description}</p></figcaption></figure>)}</div></div>
      <p className="showcaseNote"><strong>Não é só copiar um layout:</strong> o manual ensina o motivo de cada posição para você adaptar ao espaço da sua loja.</p>
    </div></section>

    <section className="section method"><div className="shell split">
      <div><span className="tag darkTag">O MÉTODO DO MANUAL</span><h2>Aprenda a lógica da<br /><em>Gôndola Lucrativa</em></h2><p className="lead">Saia do improviso e aprenda a montar cada categoria seguindo uma sequência fácil de repetir.</p>
        <div className="steps">{[
          ["1", "Agrupe por categoria", "O cliente entende a gôndola rapidamente."],
          ["2", "Posicione por prioridade", "Giro, peso e visibilidade orientam cada nível."],
          ["3", "Aproxime complementares", "Itens relacionados ficam mais fáceis de encontrar juntos."],
        ].map(x => <div key={x[0]}><b>{x[0]}</b><span><strong>{x[1]}</strong>{x[2]}</span></div>)}</div>
      </div>
      <div className="methodCarousel" aria-label="Exemplos práticos do manual passando em carrossel"><div className="carouselTrack">{[...carouselPages, ...carouselPages].map((src, i) => <Image key={`${src}-${i}`} src={src} alt={i < carouselPages.length ? "Exemplo prático de montagem ensinado no manual" : ""} width={1024} height={1280} sizes="(max-width: 560px) 190px, 178px" quality={72} aria-hidden={i >= carouselPages.length} />)}</div></div>
    </div></section>

    <section className="section cream"><div className="shell narrow center">
      <span className="tag">ISSO ACONTECE NA SUA LOJA?</span><h2>A gôndola está cheia…<br /><em>mas os produtos parecem escondidos.</em></h2><p className="lead">Quando tudo é colocado sem padrão, o cliente demora para encontrar, a reposição fica confusa e produtos complementares acabam separados.</p>
      <div className="painGrid compactPain">{[
        ["🛒", "Cliente não encontra", "e precisa perguntar onde está cada produto."],
        ["📦", "Categorias misturadas", "deixam a gôndola confusa e difícil de repor."],
        ["👀", "Produtos passam despercebidos", "mesmo estando disponíveis na prateleira."],
      ].map(x => <article key={x[1]}><i>{x[0]}</i><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
    </div></section>

    <section className="section compactSection"><div className="shell">
      <div className="narrow center head"><span className="tag">O QUE VOCÊ VAI APRENDER</span><h2>5 regras para montar uma gôndola <em>mais clara e organizada</em></h2><p className="lead">O manual explica a lógica e mostra o resultado em exemplos práticos.</p></div>
      <div className="ralos compactRalos">{principles.map((item, i) => <article key={item[0]}><b>{String(i + 1).padStart(2, "0")}</b><div><h3>{item[0]}</h3><p>{item[1]}</p></div></article>)}</div>
      <div className="center ctaSpace"><CTA text="QUERO APRENDER O PASSO A PASSO" /></div>
    </div></section>

    <section className="section compactSection"><div className="shell narrow center include"><div>
      <span className="tag">CONTEÚDO COMPLETO</span><h2>Um manual para aprender e <em>consultar na loja</em></h2><p className="lead">Leia a explicação, confira o exemplo e aplique no seu espaço.</p>
      <div className="list">{["Manual passo a passo em PDF", "30 exemplos práticos de gôndolas", "Explicação por categoria", "Como distribuir cada nível", "Produtos complementares", "Área do caixa e compra por impulso", "Guia de altura das prateleiras", "Checklist de reposição"].map(x => <span key={x}><Check />{x}</span>)}</div>
    </div></div></section>

    <section className="section who compactWho"><div className="shell narrow center">
      <span className="tag darkTag">PARA QUEM É</span><h2>Para donos de <em>mercadinhos e mercearias</em></h2>
      <div className="whoGrid">{["Quem organiza sem um padrão", "Quem tem pouco espaço de exposição", "Quem quer facilitar a compra do cliente", "Quem busca gôndolas mais profissionais"].map(x => <span key={x}><Check />{x}</span>)}</div>
      <p>Sem precisar contratar projetista ou trocar as gôndolas da loja.</p>
    </div></section>

    <section className="section bonusSection" id="bonus"><div className="shell narrow">
      <div className="center bonusHead"><span className="tag">🎁 BÔNUS GRÁTIS</span><h2>Você recebe <em>R$ 127,00 em bônus</em></h2><p className="lead">3 materiais extras incluídos hoje.</p></div>
      <div className="bonusGrid">{bonusItems.map((bonus, i) => <article key={bonus.title}><div className="bonusPreview"><Image src={bonus.image} alt={`Prévia do bônus ${bonus.title}`} width={1024} height={1280} sizes="(max-width: 560px) calc(100vw - 62px), 230px" quality={74} /><b>🎁 BÔNUS {i + 1}</b></div><div><small>GRÁTIS NO SEU KIT</small><h3>{bonus.title}</h3><p>{bonus.description}</p><strong className="bonusValue"><del>{bonus.value}</del> GRÁTIS</strong></div></article>)}</div>
    </div></section>

    <section className="section offer" id="oferta"><div className="shell narrow"><div className="offerCard">
      <header><small>OFERTA ESPECIAL</small><h2>Aprenda a montar suas gôndolas sem depender do achismo</h2></header>
      <div className="offerMockup"><Image src="/assets/manual-gondola-mockup.webp" alt="Manual Gôndola Lucrativa com passo a passo e exemplos práticos" width={1254} height={1254} sizes="(max-width: 560px) calc(100vw - 44px), 560px" quality={82} /></div>
      <div className="offerBundleSummary"><strong>VOCÊ RECEBE O MANUAL COMPLETO</strong><span>passo a passo + 30 exemplos + 3 bônus</span></div>
      <div className="offerBody"><div><h3>Manual Gôndola Lucrativa</h3><p>Aprenda a montar, organizar e adaptar suas gôndolas</p>{["Manual passo a passo em PDF", "30 exemplos práticos", "Explicação dividida por categoria", "Indicação por nível de prateleira", "Combinações de produtos complementares", "Montagem especial para o caixa", "Checklist para reposição", "3 bônus práticos incluídos"].map(x => <span className="offerItem" key={x}><Check />{x}</span>)}</div>
        <div className="buy"><small>ACESSO AO MATERIAL COMPLETO</small><div className="price"><span>por apenas</span><strong><sup>R$</sup>37<sup>,00</sup></strong><span>pagamento único</span></div><a className="cta offerCta" href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">QUERO RECEBER TUDO AGORA <b>→</b></a><p>🔒 <strong>Compra segura</strong><small>Pagamento em ambiente protegido</small></p></div>
      </div>
    </div></div></section>

    <section className="guarantee"><div className="shell narrow guaranteeCard"><div className="guaranteeSeal"><strong>7</strong><span>DIAS</span></div><div><span className="tag darkTag">COMPRA SEM RISCO</span><h2>Garantia incondicional de 7 dias</h2><p>Você terá 7 dias para conhecer o Manual Gôndola Lucrativa. Se entender que o material não é para você, basta solicitar o reembolso dentro desse prazo.</p><small>Seu investimento fica protegido durante todo o período de garantia.</small></div></div></section>

    <section className="section faq compactSection"><div className="shell narrow"><div className="center head"><span className="tag">DÚVIDAS FREQUENTES</span><h2>Antes de começar</h2></div>{[
      ["É apenas uma coleção de layouts?", "Não. O manual ensina o passo a passo da montagem e traz exemplos visuais em cada PDF."],
      ["Preciso entender de merchandising?", "Não. O conteúdo explica a lógica em linguagem simples e mostra como aplicar."],
      ["O material é físico?", "Não. Você recebe PDFs digitais para consultar no celular ou imprimir."],
      ["Serve para mercadinhos pequenos?", "Sim. Você aprende a adaptar cada exemplo ao espaço e aos produtos disponíveis."],
      ["Preciso comprar gôndolas novas?", "Não. Você pode aplicar a lógica usando as prateleiras que já possui."],
    ].map(x => <details key={x[0]}><summary>{x[0]}<b>+</b></summary><p>{x[1]}</p></details>)}</div></section>

    <footer><strong>Caixa<em>Verde</em></strong><p>Materiais práticos para gestão e organização de pequenos mercados.</p><small>© 2026 CaixaVerde.</small></footer>
    <aside className="purchaseExamples" aria-label="Demonstrações de notificações de compra">{purchaseExamples.map((person, i) => <div className="purchaseToast" key={person[0]} style={{ animationDelay: `${i * 6}s` }}><span className="purchaseIcon">✓</span><p><small>DEMONSTRAÇÃO</small><strong>{person[0]} adquiriu o Manual Gôndola Lucrativa</strong><span>{person[1]} · acesso digital</span></p></div>)}</aside>
  </main>;
}
