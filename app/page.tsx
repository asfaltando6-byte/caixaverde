import Image from "next/image";

const Check = () => <span className="check">✓</span>;
const CHECKOUT_URL = "https://pay.cakto.com.br/jv9uiic_1127615";
const CTA = ({ text = "QUERO ORGANIZAR MINHAS GÔNDOLAS" }: { text?: string }) => (
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
];

const productPages = [
  ["/assets/layout-alimentos-basicos.webp", "Alimentos básicos"],
  ["/assets/layout-cafe-da-manha.webp", "Café da manhã"],
  ["/assets/layout-limpeza.webp", "Produtos de limpeza"],
  ["/assets/layout-caixa.webp", "Produtos no caixa"],
];

const bonusItems = [
  { title: "Layout de Impulso para o Caixa", description: "Organize itens pequenos próximos ao pagamento.", value: "R$ 27,00", image: "/assets/layout-caixa.webp" },
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
    <div className="topbar" id="top">30 LAYOUTS PRONTOS PARA GÔNDOLAS</div>

    <section className="hero"><div className="shell heroGrid">
      <div className="heroCopy">
        <span className="eyebrow">● PRODUTO CERTO NO LUGAR CERTO</span>
        <h1>Layouts prontos para organizar suas gôndolas e <em>vender melhor.</em></h1>
        <p>Veja <strong>onde posicionar cada categoria</strong>, como dividir as prateleiras e quais produtos deixar próximos para facilitar a compra no seu mercadinho.</p>
      </div>
      <div className="visual">
        <Image src="/assets/gondola-mockup.webp" alt="Kit Gôndola Lucrativa com 30 layouts prontos" width={1254} height={1254} sizes="(max-width: 800px) 100vw, 50vw" quality={85} preload />
        <div className="mockupAction"><CTA />
          <div className="quick"><span><Check />30 planogramas prontos</span><span><Check />Separados por categoria</span><span><Check />PDF para consultar e imprimir</span></div>
          <small>Acesso ao kit completo por apenas <strong>R$ 37,00</strong></small>
        </div>
      </div>
    </div></section>

    <section className="section useSection" aria-labelledby="como-usar-titulo"><div className="shell">
      <div className="narrow center useHead"><span className="tag">COMO USAR O KIT</span><h2 id="como-usar-titulo">Da referência à gôndola em <em>4 passos simples</em></h2><p className="lead">Escolha a categoria e use o modelo como guia durante a organização.</p></div>
      <div className="useGrid">{[
        ["01", "Escolha a categoria", "Abra o layout de alimentos, limpeza, café, snacks ou caixa."],
        ["02", "Compare a gôndola", "Observe o espaço, os níveis e os produtos disponíveis na loja."],
        ["03", "Organize por nível", "Aplique a ordem sugerida do topo até as prateleiras inferiores."],
        ["04", "Mantenha o padrão", "Use o checklist para orientar a reposição e evitar a bagunça."],
      ].map(x => <article key={x[0]}><b>{x[0]}</b><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}</div>
      <div className="useNote"><Check /><span><strong>Não precisa trocar suas gôndolas.</strong> Adapte os modelos ao espaço e aos produtos que você já possui.</span></div>
    </div></section>

    <section className="section method"><div className="shell split">
      <div><span className="tag darkTag">O MECANISMO</span><h2>Método da<br /><em>Gôndola Lucrativa</em></h2><p className="lead">Saia do improviso e organize cada categoria seguindo uma lógica visual fácil de repetir.</p>
        <div className="steps">{[
          ["1", "Agrupe por categoria", "O cliente entende a gôndola rapidamente."],
          ["2", "Posicione por prioridade", "Giro, peso e visibilidade orientam cada nível."],
          ["3", "Aproxime complementares", "Itens relacionados ficam mais fáceis de encontrar juntos."],
        ].map(x => <div key={x[0]}><b>{x[0]}</b><span><strong>{x[1]}</strong>{x[2]}</span></div>)}</div>
      </div>
      <div className="methodCarousel" aria-label="Layouts de gôndolas passando em carrossel"><div className="carouselTrack">{[...carouselPages, ...carouselPages].map((src, i) => <Image key={`${src}-${i}`} src={src} alt={i < carouselPages.length ? "Exemplo de layout de produtos na gôndola" : ""} width={1024} height={1280} sizes="(max-width: 560px) 190px, 178px" quality={72} aria-hidden={i >= carouselPages.length} />)}</div></div>
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
      <div className="narrow center head"><span className="tag">O QUE ORIENTA CADA LAYOUT</span><h2>5 princípios para uma gôndola <em>mais clara e organizada</em></h2><p className="lead">Cada modelo mostra uma lógica simples para posicionar os produtos.</p></div>
      <div className="ralos compactRalos">{principles.map((item, i) => <article key={item[0]}><b>{String(i + 1).padStart(2, "0")}</b><div><h3>{item[0]}</h3><p>{item[1]}</p></div></article>)}</div>
      <div className="center ctaSpace"><CTA text="QUERO OS LAYOUTS PRONTOS" /></div>
    </div></section>

    <section className="section cream compactSection"><div className="shell">
      <div className="narrow center head"><span className="tag">VEJA POR DENTRO</span><h2>Modelos para <em>usar como referência</em></h2><p className="lead">Gôndolas organizadas por categoria e nível de prateleira.</p></div>
      <div className="productCarousel" aria-label="Layouts de gôndolas passando automaticamente"><div className="pagesTrack">{[...productPages, ...productPages].map((item, i) => <figure key={`${item[0]}-${i}`} aria-hidden={i >= productPages.length}><Image src={item[0]} alt={i < productPages.length ? item[1] : ""} width={1024} height={1280} sizes="(max-width: 560px) 72vw, 225px" quality={74} /><figcaption><Check />{item[1]}</figcaption></figure>)}</div></div>
      <p className="moreInside">E muitos outros layouts...</p>
    </div></section>

    <section className="section compactSection"><div className="shell narrow center include"><div>
      <span className="tag">CONTEÚDO COMPLETO</span><h2>Pronto para consultar <em>durante a organização</em></h2><p className="lead">Abra no celular ou imprima os modelos que vai aplicar.</p>
      <div className="list">{["30 layouts de gôndolas", "Alimentos básicos e mercearia", "Café da manhã e complementares", "Limpeza e cuidados da casa", "Snacks, bebidas e produtos de giro", "Área do caixa e compra por impulso", "Guia de altura das prateleiras", "Checklist de reposição"].map(x => <span key={x}><Check />{x}</span>)}</div>
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
      <header><small>OFERTA ESPECIAL</small><h2>Pare de organizar suas gôndolas no achismo</h2></header>
      <div className="offerMockup"><Image src="/assets/gondola-mockup.webp" alt="Kit Gôndola Lucrativa com 30 layouts prontos" width={1254} height={1254} sizes="(max-width: 560px) calc(100vw - 44px), 560px" quality={82} /></div>
      <div className="offerBundleSummary"><strong>VOCÊ RECEBE UM KIT COMPLETO</strong><span>30 layouts + 3 bônus + guias práticos</span></div>
      <div className="offerBody"><div><h3>Kit Gôndola Lucrativa</h3><p>30 layouts prontos para organizar produtos nas prateleiras</p>{["30 planogramas em PDF", "Modelos divididos por categoria", "Indicação por nível de prateleira", "Combinações de produtos complementares", "Layout especial para o caixa", "Guia de visualização e giro", "Checklist para reposição", "3 bônus práticos incluídos"].map(x => <span className="offerItem" key={x}><Check />{x}</span>)}</div>
        <div className="buy"><small>ACESSO AO MATERIAL COMPLETO</small><div className="price"><span>por apenas</span><strong><sup>R$</sup>37<sup>,00</sup></strong><span>pagamento único</span></div><a className="cta offerCta" href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">QUERO RECEBER TUDO AGORA <b>→</b></a><p>🔒 <strong>Compra segura</strong><small>Pagamento em ambiente protegido</small></p></div>
      </div>
    </div></div></section>

    <section className="guarantee"><div className="shell narrow guaranteeCard"><div className="guaranteeSeal"><strong>7</strong><span>DIAS</span></div><div><span className="tag darkTag">COMPRA SEM RISCO</span><h2>Garantia incondicional de 7 dias</h2><p>Você terá 7 dias para conhecer o Kit Gôndola Lucrativa. Se entender que o material não é para você, basta solicitar o reembolso dentro desse prazo.</p><small>Seu investimento fica protegido durante todo o período de garantia.</small></div></div></section>

    <section className="section faq compactSection"><div className="shell narrow"><div className="center head"><span className="tag">DÚVIDAS FREQUENTES</span><h2>Antes de começar</h2></div>{[
      ["Preciso entender de merchandising?", "Não. Os modelos são visuais e mostram uma organização simples para seguir."],
      ["O material é físico?", "Não. É um arquivo digital em PDF para consultar no celular ou imprimir."],
      ["Serve para mercadinhos pequenos?", "Sim. Os layouts podem ser adaptados ao espaço e à quantidade de produtos disponíveis."],
      ["Preciso comprar gôndolas novas?", "Não. Você pode aplicar a lógica usando as prateleiras que já possui."],
    ].map(x => <details key={x[0]}><summary>{x[0]}<b>+</b></summary><p>{x[1]}</p></details>)}</div></section>

    <footer><strong>Caixa<em>Verde</em></strong><p>Materiais práticos para gestão e organização de pequenos mercados.</p><small>© 2026 CaixaVerde.</small></footer>
    <aside className="purchaseExamples" aria-label="Demonstrações de notificações de compra">{purchaseExamples.map((person, i) => <div className="purchaseToast" key={person[0]} style={{ animationDelay: `${i * 6}s` }}><span className="purchaseIcon">✓</span><p><small>DEMONSTRAÇÃO</small><strong>{person[0]} adquiriu o Kit Gôndola Lucrativa</strong><span>{person[1]} · acesso digital</span></p></div>)}</aside>
  </main>;
}
