const Check = () => <span className="check">✓</span>;
const CHECKOUT_URL = "https://checkout.payt.com.br/3810ba39317d5de43b797ef37e81fc38";
const CTA = ({text="QUERO PROTEGER O LUCRO DO MEU MERCADINHO"}:{text?:string}) => <a className="cta" href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">{text} <b>→</b></a>;

const ralos=[
 ["Preço errado","Você vende, mas a margem não paga todos os custos."],
 ["Produtos vencidos","Mercadoria comprada vira descarte antes de sair."],
 ["Estoque parado","Seu dinheiro fica preso em produtos sem giro."],
 ["Falta de mercadoria","O cliente procura, não encontra e compra em outro lugar."],
 ["Fiado sem controle","A venda acontece, mas o dinheiro não entra no caixa."],
 ["Diferenças no caixa","Retiradas e pequenos erros ficam sem explicação."],
 ["Despesas invisíveis","Gastos pequenos se acumulam e consomem o resultado."],
];

const carouselPages=[
 "/assets/carousel-diagnostico.png",
 "/assets/carousel-preco.png",
 "/assets/carousel-validade.png",
 "/assets/carousel-estoque.png",
 "/assets/carousel-fiado.png",
 "/assets/carousel-caixa.png",
];

const productPages=[
 ["/assets/carousel-diagnostico.png","Diagnóstico do mercadinho"],
 ["/assets/ralo-preco.png","Entenda cada ralo"],
 ["/assets/carousel-preco.png","Controle de preços"],
 ["/assets/controle-validade.png","Controle de validade"],
 ["/assets/carousel-validade.png","Redução de perdas"],
 ["/assets/carousel-estoque.png","Organização do estoque"],
 ["/assets/controle-fiado.png","Organização do fiado"],
 ["/assets/carousel-fiado.png","Registro de recebimentos"],
 ["/assets/carousel-caixa.png","Fechamento de caixa"],
];

const bonusItems=[
 {title:"Controle de Validade Express",description:"Uma folha rápida para registrar produtos próximos do vencimento e agir antes que virem prejuízo.",image:"/assets/controle-validade.png"},
 {title:"Checklist de Fechamento de Caixa",description:"Um passo a passo simples para conferir entradas, saídas e diferenças no fim do dia.",image:"/assets/carousel-caixa.png"},
];

const purchaseExamples=[
 ["Ana P.","Maceió, AL"],
 ["Carlos M.","Recife, PE"],
 ["Juliana S.","Aracaju, SE"],
];

export default function Home(){return <main>
 <header className="brandBar"><a className="brandLogo" href="#top" aria-label="CaixaVerde - início"><span className="brandIcon" aria-hidden="true"><svg viewBox="0 0 64 64" role="img"><rect x="3" y="3" width="58" height="58" rx="18"/><path className="logoBars" d="M17 43V34M28 43V27M39 43V20"/><path className="logoArrow" d="m17 29 11-8 10 3 9-10M40 14h7v7"/><path className="logoLeaf" d="M44 47c7-1 10-5 10-11-7 0-12 3-13 10 3-3 6-5 10-6"/></svg></span><span className="brandWordmark">Caixa<strong>Verde</strong><small>GESTÃO SIMPLES PARA MERCADINHOS</small></span></a></header>
 <div className="topbar" id="top">GUIA PRÁTICO PARA DONOS DE MERCADINHO</div>
 <section className="hero"><div className="shell heroGrid">
  <div className="heroCopy"><span className="eyebrow">● PARA QUEM VENDE, MAS NÃO VÊ O DINHEIRO SOBRAR</span>
   <h1>Seu mercadinho vende todos os dias… <em>mas o lucro nunca aparece?</em></h1>
   <p>Descubra os <strong>7 ralos silenciosos</strong> que podem estar levando o dinheiro do seu negócio e aplique uma rotina simples para identificar perdas, organizar a operação e proteger o resultado.</p>
  </div>
  <div className="visual"><img src="/assets/product-mockup-v2.webp" alt="Manual CaixaVerde em tablet e versão impressa" width="1536" height="1024" loading="eager" fetchPriority="high" decoding="async"/><div className="mockupAction"><CTA/><div className="quick"><span><Check/>Sem planilhas complicadas</span><span><Check/>15 minutos por dia</span><span><Check/>PDF prático e imprimível</span></div><small>Acesso ao manual completo por apenas <strong>R$ 37,00</strong></small></div></div>
 </div></section>

 <section className="section method"><div className="shell split"><div><span className="tag darkTag">O MÉTODO</span><h2>Encontre primeiro.<br/><em>Corrija depois.</em></h2><p className="lead">O Manual dos 7 Ralos ajuda você a sair do “achismo” e enxergar onde o resultado pode estar escapando.</p><div className="steps">{[["1","Faça o diagnóstico","Identifique os pontos de risco."],["2","Escolha os maiores ralos","Priorize o que mais pesa na sua loja."],["3","Aplique o plano de 7 dias","Faça uma melhoria objetiva por dia."]].map(x=><div key={x[0]}><b>{x[0]}</b><span><strong>{x[1]}</strong>{x[2]}</span></div>)}</div></div><div className="methodCarousel" aria-label="Páginas do manual passando em carrossel"><div className="carouselTrack">{[...carouselPages,...carouselPages].map((src,i)=><img key={`${src}-${i}`} src={src} alt={i<carouselPages.length?"Página interna do Manual CaixaVerde":""} width="910" height="1287" loading="lazy" decoding="async" aria-hidden={i>=carouselPages.length}/>)}</div></div></div></section>

 <section className="section cream"><div className="shell narrow center"><span className="tag">ISSO ACONTECE COM VOCÊ?</span><h2>O caixa gira, a loja trabalha…<br/><em>e no fim do mês quase nada sobra.</em></h2><p className="lead">O problema pode não ser falta de vendas. Pequenos erros de preço, validade, estoque, fiado e despesas podem consumir o resultado sem chamar atenção.</p>
 <div className="painGrid compactPain">{[["📦","Produtos vencem","e você só percebe quando já virou prejuízo."],["🛒","Você compra errado","sobra o que não vende e falta o que gira."],["💸","O dinheiro entra","mas fornecedores e despesas levam tudo."]].map(x=><article key={x[1]}><i>{x[0]}</i><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>

 <section className="section compactSection"><div className="shell"><div className="narrow center head"><span className="tag">O QUE VOCÊ VAI DESCOBRIR</span><h2>Os 7 ralos que podem estar <em>consumindo seu lucro</em></h2><p className="lead">Preço, validade, estoque, ruptura, fiado, caixa e despesas invisíveis.</p></div><div className="ralos compactRalos">{ralos.map((r,i)=><article key={r[0]}><b>{String(i+1).padStart(2,"0")}</b><div><h3>{r[0]}</h3></div></article>)}</div><div className="center ctaSpace"><CTA text="QUERO IDENTIFICAR MEUS 7 RALOS"/></div></div></section>

 <section className="section cream compactSection"><div className="shell"><div className="narrow center head"><span className="tag">VEJA POR DENTRO</span><h2>Material para <em>usar na loja.</em></h2></div><div className="productCarousel" aria-label="Páginas do produto passando automaticamente para a esquerda"><div className="pagesTrack">{[...productPages,...productPages].map((x,i)=><figure key={`${x[0]}-${i}`} aria-hidden={i>=productPages.length}><img src={x[0]} alt={i<productPages.length?x[1]:""} width="910" height="1287" loading="lazy" decoding="async"/><figcaption><Check/>{x[1]}</figcaption></figure>)}</div></div><p className="moreInside">E muito mais...</p></div></section>

 <section className="section compactSection"><div className="shell narrow center include"><div><span className="tag">CONTEÚDO COMPLETO</span><h2>Prático, direto e <em>aplicável</em></h2><p className="lead">Leia no celular ou imprima as folhas para usar na rotina.</p><div className="list">{["Diagnóstico com pontuação","Plano prático de 7 dias","Checklists de aplicação","Controle de validade e perdas","Fechamento de caixa e fiado","Lista de compras e painel semanal"].map(x=><span key={x}><Check/>{x}</span>)}</div></div></div></section>

 <section className="section who compactWho"><div className="shell narrow center"><span className="tag darkTag">PARA QUEM É</span><h2>Para donos de <em>mercadinhos e mercearias</em></h2><div className="whoGrid">{["Quem controla muita coisa no caderno","Quem não sabe o lucro real","Quem administra com a família","Quem quer uma rotina organizada"].map(x=><span key={x}><Check/>{x}</span>)}</div><p>Sem contabilidade complicada e sem precisar dominar planilhas.</p></div></section>

 <section className="section bonusSection"><div className="shell narrow"><div className="center bonusHead"><span className="tag">BÔNUS INCLUÍDOS</span><h2>Leve também <em>2 materiais extras</em></h2><p className="lead">Ferramentas complementares para começar a organizar o mercadinho com mais rapidez.</p></div><div className="bonusGrid">{bonusItems.map((bonus,i)=><article key={bonus.title}><div className="bonusPreview"><img src={bonus.image} alt={`Prévia do bônus ${bonus.title}`} width="910" height="1287" loading="lazy" decoding="async"/><b>BÔNUS {i+1}</b></div><div><small>INCLUÍDO SEM CUSTO EXTRA</small><h3>{bonus.title}</h3><p>{bonus.description}</p></div></article>)}</div></div></section>

 <section className="section offer" id="oferta"><div className="shell narrow"><div className="offerCard"><header><small>OFERTA ESPECIAL</small><h2>Comece hoje a enxergar onde o dinheiro do seu mercadinho está indo</h2></header><div className="offerMockup"><img src="/assets/product-mockup-v2.webp" alt="CaixaVerde: Manual dos 7 Ralos" width="1536" height="1024" loading="lazy" fetchPriority="low" decoding="async"/></div><div className="offerBundleSummary"><strong>VOCÊ RECEBE UM KIT COMPLETO</strong><span>1 manual + 2 bônus + folhas práticas para imprimir</span></div><div className="offerBody"><div><h3>CaixaVerde</h3><p>Manual dos 7 Ralos que Fazem o Dinheiro Sumir</p>{["Manual completo em PDF","Diagnóstico com pontuação","Plano de ação de 7 dias","Checklists de aplicação","Controle de validade e perdas","Controle de caixa e fiado","Lista de compras e painel semanal","2 bônus práticos incluídos"].map(x=><span className="offerItem" key={x}><Check/>{x}</span>)}</div><div className="buy"><small>ACESSO AO MATERIAL COMPLETO</small><div className="price"><span>por apenas</span><strong><sup>R$</sup>37<sup>,00</sup></strong><span>pagamento único</span></div><a className="cta offerCta" href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">QUERO RECEBER TUDO AGORA <b>→</b></a><p>🔒 <strong>Compra segura</strong><small>Pagamento em ambiente protegido</small></p></div></div></div></div></section>

 <section className="guarantee"><div className="shell narrow guaranteeCard"><div className="guaranteeSeal"><strong>7</strong><span>DIAS</span></div><div><span className="tag darkTag">COMPRA SEM RISCO</span><h2>Garantia incondicional de 7 dias</h2><p>Você terá 7 dias para conhecer o CaixaVerde. Se entender que o material não é para você, basta solicitar o reembolso dentro desse prazo.</p><small>Seu investimento fica protegido durante todo o período de garantia.</small></div></div></section>
 <section className="section faq compactSection"><div className="shell narrow"><div className="center head"><span className="tag">DÚVIDAS FREQUENTES</span><h2>Antes de começar</h2></div>{[["Preciso entender de contabilidade?","Não. O conteúdo usa exemplos diretos e linguagem simples."],["O material é físico?","Não. É um arquivo digital em PDF para ler ou imprimir."],["Serve para mercados pequenos?","Sim. Foi pensado para mercadinhos, mercearias e pequenos mercados."],["Preciso usar planilhas?","Não. As folhas práticas podem ser preenchidas à mão."]].map(x=><details key={x[0]}><summary>{x[0]}<b>+</b></summary><p>{x[1]}</p></details>)}</div></section>
 <footer><strong>Caixa<em>Verde</em></strong><p>Material digital educativo para gestão de pequenos mercados.</p><small>© 2026 CaixaVerde.</small></footer>
 <aside className="purchaseExamples" aria-label="Demonstrações de notificações de compra">{purchaseExamples.map((person,i)=><div className="purchaseToast" key={person[0]} style={{animationDelay:`${i*6}s`}}><span className="purchaseIcon">✓</span><p><small>DEMONSTRAÇÃO</small><strong>{person[0]} adquiriu o CaixaVerde</strong><span>{person[1]} · acesso digital</span></p></div>)}</aside>
</main>}
