import type { PostKey } from '../routes';
import type { PostContent } from './types';

// Artículos del blog en inglés.
export const postsEn: Record<PostKey, PostContent> = {
  /* ------------------------------------------------------------------ */
  uaeTax: {
    metaTitle: 'UAE Tax System 2026: Corporate Tax, VAT & Personal Tax Guide',
    title: 'The UAE tax landscape in 2026: Corporate Tax, VAT and what is still tax-free',
    excerpt:
      'The UAE is no longer a zero-tax jurisdiction for companies. Here is how Corporate Tax, the free zone regime, VAT and personal taxation work today — and what it means if you run a digital business.',
    tags: ['Corporate Tax', 'VAT', 'Free zones', 'Dubai'],
    takeaways: [
      'Individuals still pay no personal income tax on salaries or investment income.',
      'Companies pay 9% Corporate Tax on taxable income above AED 375,000 — free zone companies included, unless they qualify for 0%.',
      'VAT at 5% applies to most goods and services; registration is mandatory above AED 375,000 of taxable supplies.',
      'Registrations, bookkeeping and annual filings are required even when no tax is due.',
    ],
    body: [
      { p: `For years, the UAE was synonymous with “no taxes”. That picture changed in 2018 with the introduction of VAT and, above all, in 2023 with the federal Corporate Tax. The UAE remains one of the most competitive jurisdictions in the world, but it now has a real tax system, with registrations, deadlines and penalties.` },
      { p: `This guide summarises the main taxes that affect entrepreneurs and digital businesses operating from the UAE.` },

      { h2: `Personal taxation: still no income tax`, id: 'personal-taxes' },
      { p: `The UAE does not levy personal income tax on salaries, dividends, interest or capital gains obtained by individuals. There is no federal wealth tax or inheritance tax either.` },
      { p: `The exception is business activity: individuals who carry out a business or professional activity in the UAE become subject to Corporate Tax once their turnover from that activity exceeds AED 1 million in a calendar year.` },
      { callout: { title: `Tax residency certificate`, text: `To prove that you are tax resident in the UAE — for example, before the tax authority of the country you left — you can apply for a tax residency certificate. As a general rule, individuals qualify if they spend at least 183 days in the UAE within a 12-month period, or at least 90 days if they also meet additional conditions such as holding a residence visa and having a permanent home or employment in the country.` } },

      { h2: `Corporate Tax: 9% above AED 375,000`, id: 'corporate-tax' },
      { p: `The federal Corporate Tax applies to financial years starting on or after 1 June 2023. The standard rates are:` },
      { table: { head: ['Taxable income', 'Rate'], rows: [['Up to AED 375,000', '0%'], ['Above AED 375,000', '9%']] } },
      { p: `Large multinational groups with consolidated revenue of at least €750 million are also subject to a 15% domestic minimum top-up tax from 2025.` },
      { p: `All taxable persons must register with the Federal Tax Authority (FTA) and file an annual return within nine months of the end of their financial year — **even if the tax payable is zero**.` },
      { h3: `Small Business Relief` },
      { p: `Resident businesses with revenue of up to AED 3 million can elect Small Business Relief and be treated as having no taxable income for tax periods ending on or before 31 December 2026. The relief must be claimed in the return, and it is not available to qualifying free zone persons or members of large multinational groups.` },

      { h2: `Free zone companies: 0% is not automatic`, id: 'free-zones' },
      { p: `Free zone companies are subject to Corporate Tax like any other company. However, they can apply a 0% rate on their qualifying income if they meet the conditions to be a **Qualifying Free Zone Person**:` },
      {
        list: [
          `Maintaining adequate substance in the free zone: assets, employees and operating expenses`,
          `Earning qualifying income, such as income from transactions with other free zone persons or from certain qualifying activities`,
          `Keeping non-qualifying revenue below the de minimis threshold: 5% of total revenue or AED 5 million, whichever is lower`,
          `Preparing audited financial statements and complying with transfer pricing rules`,
        ],
      },
      { p: `Income that does not qualify is taxed at 9%. If the conditions stop being met, the company loses the 0% rate for that tax period and the following four. That is why choosing the right structure — and knowing where your customers are — matters. We explain the differences in [Free zone or mainland in Dubai](/blog/dubai-free-zone-vs-mainland).` },

      { h2: `VAT: 5% on most goods and services`, id: 'vat' },
      { p: `VAT has applied in the UAE since 1 January 2018 at a standard rate of 5%. Some supplies are zero-rated, such as certain exports of services, and others are exempt, such as certain financial services and residential property.` },
      {
        list: [
          [`Mandatory registration`, `when taxable supplies exceed AED 375,000 in the last 12 months or are expected to exceed it in the next 30 days.`],
          [`Voluntary registration`, `possible from AED 187,500.`],
          [`Returns`, `usually quarterly, with a filing and payment deadline for each period.`],
        ],
      },
      { p: `Non-resident businesses that supply services to consumers in the UAE, such as digital services, may have to register regardless of the threshold. If you sell digital products, read our guide on [VAT on digital products and online courses](/blog/vat-digital-products-online-courses).` },

      { h2: `Other obligations to keep in mind`, id: 'other-obligations' },
      {
        list: [
          [`Excise tax`, `on specific goods such as tobacco, energy drinks and sugary drinks.`],
          [`Beneficial ownership`, `companies must keep an up-to-date register of their ultimate beneficial owners.`],
          [`Record keeping`, `accounting and tax records must be kept for at least seven years.`],
          [`E-invoicing`, `the UAE has announced a phased roll-out of mandatory electronic invoicing, starting with larger businesses.`],
        ],
      },

      { h2: `What this means for a digital business`, id: 'digital-business' },
      { p: `The UAE is still an extremely competitive place to run an international business: no personal income tax, a 9% Corporate Tax with a generous threshold and, for well-structured free zone companies, a 0% rate on qualifying income.` },
      { p: `But “competitive” is not the same as “no obligations”. Every company needs to be registered, keep proper books and file on time — this is exactly what our [tax management in Dubai](/services/dubai-tax-management) service covers. And moving your company to Dubai does not change where you personally pay tax: that depends on your own tax residency, as we explain in [Does a Dubai company pay tax in Spain?](/blog/dubai-company-taxed-in-spain)` },
    ],
    faq: [
      { q: 'Is Dubai tax-free for companies?', a: 'Not anymore. Since 2023, companies pay 9% Corporate Tax on taxable income above AED 375,000. Free zone companies can pay 0% on qualifying income if they meet the requirements.' },
      { q: 'Do I pay income tax on my salary in the UAE?', a: 'No. The UAE does not tax employment income, dividends or capital gains obtained by individuals.' },
      { q: 'Do I need to register for Corporate Tax if I make no profit?', a: 'Yes. Registration and the annual return are required for taxable persons even when no tax is payable.' },
      { q: 'When is VAT registration mandatory in the UAE?', a: 'When your taxable supplies exceed AED 375,000 over the last 12 months or are expected to exceed that amount in the next 30 days.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  beckham: {
    metaTitle: 'Beckham Law Spain 2026: Requirements, Tax Rates & How to Apply',
    title: 'Spain’s Beckham Law: requirements, tax rates and how to apply',
    excerpt:
      'The Beckham Law lets people who move to Spain pay a flat 24% on their employment income for up to six years. We explain who can apply after the 2023 reform, how income is taxed and the deadline you cannot miss.',
    tags: ['Beckham Law', 'Moving to Spain', 'Tax residency', 'Remote work'],
    takeaways: [
      'Employment income is taxed at 24% up to €600,000, and at 47% above.',
      'Most income obtained outside Spain is not taxed in Spain while the regime applies.',
      'It lasts for the year you become resident plus the following five years.',
      'You must not have been tax resident in Spain in the previous five years.',
      'The application (Form 149) must be filed within six months of starting your activity in Spain.',
    ],
    body: [
      { p: `When someone moves to Spain, they usually become tax resident and start paying tax on their worldwide income at progressive rates that, depending on the region, can reach 47% or more. The special regime for workers relocating to Spain — popularly known as the Beckham Law, after the footballer who was one of its best-known beneficiaries — offers a very different alternative.` },
      { p: `Since 2023, the regime is also open to remote workers, company directors and entrepreneurs, which has made it especially relevant for digital professionals.` },

      { h2: `How the Beckham Law works`, id: 'how-it-works' },
      { p: `If you qualify, you become tax resident in Spain but pay personal income tax under the rules that apply to non-residents. In practice, this means:` },
      {
        list: [
          `Employment income is taxed at a flat 24% up to €600,000 per year, and at 47% on the excess.`,
          `All employment income earned while the regime applies is considered obtained in Spain.`,
          `Most other income obtained outside Spain — such as foreign dividends, interest or capital gains — is not taxed in Spain.`,
          `Spanish-source investment income is taxed at the rates that apply to savings income.`,
          `For wealth tax purposes, generally only assets located in Spain are taken into account.`,
        ],
      },
      { p: `Instead of the ordinary income tax return, taxpayers under the regime file **Form 151**.` },

      { h2: `Who can apply after the 2023 reform`, id: 'who-can-apply' },
      { p: `The Startups Law, in force since 2023, relaxed the requirements. To apply, you must:` },
      {
        olist: [
          `Not have been tax resident in Spain in the five tax years before your move (previously ten).`,
          `Move to Spain for one of the reasons set out in the law.`,
          `Not obtain income through a permanent establishment in Spain, except in specific cases such as qualifying entrepreneurial activities.`,
        ],
      },
      { p: `The move must be due to one of these reasons:` },
      {
        list: [
          [`An employment contract`, `with a Spanish or foreign employer, including remote work carried out from Spain using digital means.`],
          [`Becoming a company director`, `with some limits when the company is an asset-holding entity.`],
          [`An entrepreneurial activity`, `considered innovative and of special economic interest for Spain.`],
          [`Highly qualified professional work`, `for startups, or for training, research and development activities.`],
        ],
      },
      { callout: { title: `What about freelancers?`, text: `A standard self-employed activity does not give access to the regime by itself. Freelancers can only benefit through specific routes, such as an entrepreneurial activity recognised as innovative.` } },

      { h2: `Family members can benefit too`, id: 'family' },
      { p: `The reform also extended the regime to your spouse — or the other parent of your children — and to children under 25, or of any age if they have a disability, provided they move to Spain with you or during the first tax year and meet additional conditions regarding their income.` },

      { h2: `How to apply: Form 149 and the six-month deadline`, id: 'how-to-apply' },
      { p: `The application is filed with Form 149 within **six months** of starting your activity in Spain. That date is usually the day you register with Spanish Social Security or, if you remain in your home country’s social security system, the date shown on the corresponding certificate.` },
      { p: `This deadline is strict: once it has passed, you cannot apply for the regime for that move. That is why it is worth analysing your case before you arrive, not after.` },
      { p: `You can also opt out of the regime later: the waiver is filed during November and December of the year before it should take effect.` },

      { h2: `Is it worth it? A simple comparison`, id: 'comparison' },
      { p: `Imagine a remote employee who moves to Spain with a salary of €120,000 and some investment income from abroad:` },
      {
        table: {
          head: ['', 'General regime', 'Beckham Law'],
          rows: [
            ['Tax on salary', 'Progressive rates that can reach 47% or more depending on the region', 'Flat 24%'],
            ['Foreign dividends and interest', 'Taxed in Spain', 'Generally not taxed in Spain'],
            ['Wealth tax', 'Worldwide assets', 'Generally only assets in Spain'],
          ],
        },
      },
      { p: `The regime is not automatically better for everyone: people with lower income, deductions that only exist in the general regime or plans to stay in Spain for many years should compare both options with real numbers.` },

      { h2: `Before you move`, id: 'before-moving' },
      { p: `The Beckham Law is one of the most attractive regimes in Europe, but the requirements and the deadline leave no room for mistakes. If you are planning to relocate, check how the regime fits into your [change of tax residency](/services/tax-residency-change), or see how we handle [Beckham Law applications](/services/beckham-law-spain).` },
    ],
    faq: [
      { q: 'Can digital nomads apply for the Beckham Law?', a: 'Yes, if they move to Spain to work remotely for a company under an employment contract and meet the rest of the requirements. Freelancers generally need to qualify through another route.' },
      { q: 'How long does the Beckham Law last?', a: 'The year you become tax resident in Spain and the following five tax years.' },
      { q: 'What is the deadline to apply for the Beckham Law?', a: 'Six months from the start of your activity in Spain, using Form 149.' },
      { q: 'Is foreign income taxed under the Beckham Law?', a: 'Most income obtained outside Spain is not taxed in Spain under the regime. Employment income, however, is considered obtained in Spain and taxed at 24% up to €600,000.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  llc: {
    metaTitle: 'US LLC Taxes for Non-Residents: Why LLCs Are Tax-Transparent',
    title: 'US LLCs are tax-transparent: why an LLC won’t make you tax-free',
    excerpt:
      'Many entrepreneurs set up a US LLC believing it means paying no tax. In reality, an LLC is usually transparent: the US doesn’t tax it, but your country of residence taxes you. Here is how it works and what to watch out for.',
    tags: ['LLC', 'United States', 'International structures', 'Tax transparency'],
    takeaways: [
      'For US federal tax purposes, a single-member LLC is disregarded by default: its income belongs to its owner.',
      'A foreign owner with no US trade or business often pays no US federal income tax — but still has filing obligations.',
      'Your country of residence will usually tax the LLC’s profits as if you had earned them directly.',
      'In Spain, tax-transparent LLCs have generally been treated as income-attribution entities.',
    ],
    body: [
      { p: `The US Limited Liability Company has become hugely popular among digital entrepreneurs. It is quick to set up, cheap to maintain, opens the door to US banks and payment platforms and, above all, has a reputation for “not paying taxes”.` },
      { p: `That last part is where the problem starts. An LLC does not eliminate taxes: in most cases, it simply moves them to your country of residence.` },

      { h2: `What a US LLC is`, id: 'what-is-an-llc' },
      { p: `An LLC is a company created under the laws of a US state, such as Delaware, Wyoming or New Mexico. Like a corporation, it limits its members’ liability, but its tax treatment is very flexible. For US federal tax purposes:` },
      {
        list: [
          [`Single-member LLC`, `treated by default as a disregarded entity: the IRS ignores the company and attributes its income to the owner.`],
          [`Multi-member LLC`, `treated by default as a partnership: the income flows through to the members.`],
          [`Election`, `an LLC can choose to be taxed as a corporation by filing Form 8832.`],
        ],
      },

      { h2: `Why many foreign owners pay no US tax`, id: 'no-us-tax' },
      { p: `If the owner is not a US tax resident and the LLC has no trade or business effectively connected with the US — no office, employees or dependent agents there — its income is generally not subject to US federal income tax. The US sees that income as the foreign owner’s, earned outside the US.` },
      { p: `That is where the “tax-free” idea comes from. But it only describes the US side of the story.` },
      { callout: { title: `Filing obligations still apply`, text: `A foreign-owned single-member LLC must file Form 5472 together with a pro forma Form 1120 every year to report transactions with its owner. The penalty for not filing starts at $25,000. States also charge annual fees or franchise taxes.` } },

      { h2: `Tax transparency: your country taxes you`, id: 'transparency' },
      { p: `Because the LLC is transparent, most countries of residence look through it. If you live in a country that taxes its residents on their worldwide income, the LLC’s profits will usually be taxed there as if you had earned them personally — **whether or not you withdraw the money**.` },
      { p: `Each country classifies foreign entities with its own criteria. Some follow the US treatment and consider the LLC transparent; others compare its legal features with local company types and may treat it as a corporation, which changes how and when the income is taxed.` },
      { h3: `The case of Spain` },
      { p: `The Spanish tax authorities have generally treated tax-transparent US LLCs as entities under the income attribution regime (entidades en régimen de atribución de rentas). In practice, a Spanish resident member must report the LLC’s income in their personal income tax return according to its nature — for example, as business income — taxed at progressive rates.` },
      { p: `Setting up an LLC therefore does not reduce the tax bill of a Spanish resident. It can also add complexity: US filings, Spanish reporting obligations for foreign accounts and assets, and possible social security obligations for the activity you carry out.` },

      { h2: `Common mistakes with LLCs`, id: 'common-mistakes' },
      {
        list: [
          [`Assuming no filings are needed`, `Form 5472 and state requirements apply even with zero US tax.`],
          [`Not declaring the income at home`, `transparency means the income is yours, even if it stays in the LLC’s account.`],
          [`Believing no one will know`, `information exchange between tax authorities makes undeclared structures increasingly easy to detect.`],
          [`Using an LLC to ignore your residency`, `if you actually live in a country, that country’s rules apply regardless of where your company is.`],
        ],
      },

      { h2: `When an LLC can make sense`, id: 'when-it-makes-sense' },
      { p: `An LLC is not a bad tool. It can be useful to sell to US customers, access US banking and payment processors, or as part of an international structure that has been designed and reported correctly in the owner’s country of residence.` },
      { p: `The key is to decide based on your actual tax residency — not on what worked for someone else. If you are considering an LLC or already have one, an [international tax structuring](/services/international-tax-structuring) review will tell you how it is really taxed in your case.` },
    ],
    faq: [
      { q: 'Does a US LLC pay taxes?', a: 'A single-member LLC owned by a non-resident with no US trade or business generally pays no US federal income tax, but its owner is usually taxed in their country of residence.' },
      { q: 'Is an LLC tax-free for Spanish residents?', a: 'No. Spain has generally treated transparent LLCs as income-attribution entities, so the member pays Spanish personal income tax on the profits.' },
      { q: 'What is Form 5472?', a: 'An annual information return that foreign-owned single-member LLCs must file, together with a pro forma Form 1120, to report transactions with their owner.' },
      { q: 'Is a Dubai company a better option than an LLC?', a: 'A Dubai company is a separate taxable entity with its own rules. Whether it makes sense depends on where you live and where the company is actually managed.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  digitalVat: {
    metaTitle: 'VAT on Digital Products & Online Courses: EU, UK and UAE Guide',
    title: 'VAT on digital products and online courses: EU, UK and UAE rules explained',
    excerpt:
      'If you sell e-books, templates, software or online courses, VAT depends on where your customer is, not where your company is. We explain the EU, UK and UAE rules, the OSS scheme and the mistakes that cost digital businesses the most.',
    tags: ['VAT', 'Digital products', 'Online courses', 'OSS', 'E-commerce'],
    takeaways: [
      'For B2C sales of digital services in the EU, VAT is charged at the rate of the customer’s country.',
      'EU sellers can apply their home VAT only below €10,000 of cross-border B2C sales per year; non-EU sellers have no threshold.',
      'The One-Stop Shop (OSS) lets you declare EU VAT in a single quarterly return.',
      'B2B sales to VAT-registered businesses generally use the reverse charge.',
      'Marketplaces and merchant-of-record platforms may handle VAT for you.',
    ],
    body: [
      { p: `Selling digital products has one huge advantage: you can sell to anyone, anywhere. It also has a less obvious consequence: **VAT follows the customer**. An online course sold to a consumer in Germany carries German VAT; the same course sold to a consumer in France carries French VAT — whether your company is in Spain, Dubai or the US.` },

      { h2: `What counts as a digital service`, id: 'digital-services' },
      { p: `For VAT purposes, electronically supplied services are those delivered over the internet with minimal human intervention. Typical examples:` },
      {
        list: [
          `E-books, templates, presets and downloadable files`,
          `Pre-recorded online courses and membership content`,
          `Software, apps and SaaS subscriptions`,
          `Streaming and digital media`,
        ],
      },
      { p: `Services that involve significant human intervention — such as one-to-one consulting delivered by video call — are not electronically supplied services and may follow different rules.` },
      { callout: { title: `Live online events`, text: `Since 1 January 2025, services such as live-streamed classes, webinars or virtual events supplied to consumers in the EU are taxed where the customer is located, just like other digital services.` } },

      { h2: `B2B or B2C: the first question`, id: 'b2b-b2c' },
      {
        list: [
          [`Business customers (B2B)`, `if the customer is a VAT-registered business in another country, you generally invoice without VAT and the customer accounts for it under the reverse charge. Check the VAT number — in the EU, through VIES — and keep the evidence.`],
          [`Consumers (B2C)`, `you charge the VAT of the country where the consumer is located.`],
        ],
      },

      { h2: `Selling to consumers in the EU`, id: 'eu' },
      { h3: `If your business is established in the EU` },
      { p: `EU sellers can charge their home country’s VAT on cross-border B2C sales of digital services as long as those sales stay below **€10,000 per year** across the whole EU. Above that threshold, they must apply the VAT rate of each customer’s country.` },
      { h3: `If your business is outside the EU` },
      { p: `Companies established outside the EU — for example, a UAE company or a US LLC — have **no threshold**: they must charge the VAT of the customer’s country from the first sale to an EU consumer.` },
      { h3: `The One-Stop Shop (OSS)` },
      { p: `To avoid registering for VAT in every country, you can use the One-Stop Shop: you register in a single EU country and file one quarterly return that includes the VAT of all EU countries. EU businesses use the Union scheme; non-EU businesses selling digital services use the non-Union scheme.` },
      { p: `You must also keep evidence of where each customer is located, such as the billing address, the IP address or the country of the payment card.` },

      { h2: `Selling to consumers in the UK`, id: 'uk' },
      { p: `The UK applies similar rules. Businesses established outside the UK that sell digital services to UK consumers must register for UK VAT from the first sale and charge UK VAT, currently 20% at the standard rate.` },

      { h2: `Selling to consumers in the UAE`, id: 'uae' },
      { p: `The UAE charges 5% VAT on electronic services supplied to consumers in the country. Non-resident suppliers of digital services to UAE consumers may have to register for VAT regardless of the registration threshold. If your company is based in the UAE, read our overview of the [UAE tax system](/blog/uae-tax-system-guide).` },

      { h2: `Marketplaces and merchant-of-record platforms`, id: 'platforms' },
      {
        list: [
          [`App stores and marketplaces`, `when they intervene in the sale and set its terms, they are generally treated as the supplier for VAT purposes and charge the VAT.`],
          [`Merchant-of-record platforms`, `services such as Paddle or Lemon Squeezy sell to the customer in their own name and handle the VAT; you invoice the platform.`],
          [`Your own website with Stripe or similar`, `you are the seller: calculating, charging and declaring VAT is your responsibility, even if the tool helps you calculate it.`],
        ],
      },

      { h2: `Quick checklist for digital businesses`, id: 'checklist' },
      {
        olist: [
          `Identify whether each sale is B2B or B2C.`,
          `Collect and store evidence of the customer’s location.`,
          `Check whether the €10,000 EU threshold applies to you — or whether any threshold applies at all.`,
          `Register for OSS if you sell to EU consumers.`,
          `Review the rules of other markets where you have customers, such as the UK or the UAE.`,
          `Keep your invoices and records consistent with what you declare.`,
        ],
      },
      { p: `VAT on digital products is one of the areas where errors accumulate silently. If you sell online from Spain, our [tax management in Spain](/services/spain-tax-management) service covers international invoicing; if your company is in the UAE, see [tax management in Dubai](/services/dubai-tax-management).` },
    ],
    faq: [
      { q: 'Do I have to charge VAT on online courses?', a: 'Yes, for sales to consumers. Pre-recorded courses are digital services taxed where the customer is located, and live online classes supplied to EU consumers are also taxed in the customer’s country since 2025.' },
      { q: 'Does a Dubai company have to charge EU VAT?', a: 'Yes, if it sells digital services to consumers in the EU. Non-EU sellers have no threshold and can use the non-Union OSS scheme.' },
      { q: 'What is the €10,000 threshold?', a: 'The annual limit of cross-border B2C sales of digital services within the EU below which an EU-established seller can apply its home country’s VAT.' },
      { q: 'Do I charge VAT to business customers?', a: 'Generally not, if the customer is a VAT-registered business in another country: the reverse charge applies. Always verify the VAT number.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  dubaiInSpain: {
    metaTitle: 'Does a Dubai Company Pay Tax in Spain? Effective Management Explained',
    title: 'Does a Dubai company pay tax in Spain? Place of effective management explained',
    excerpt:
      'Setting up a company in Dubai while living in Spain is one of the most common — and riskiest — structures among digital entrepreneurs. We explain when the company is taxed in Spain and how to tell whether your structure holds up.',
    tags: ['Dubai', 'Spain', 'Tax residency', 'Effective management'],
    takeaways: [
      'A foreign company is tax resident in Spain if its place of effective management is in Spain.',
      'If you run the company from Spain, it can be taxed under Spanish Corporate Income Tax, not at 9%.',
      'Even if the company is resident abroad, a permanent establishment or Spanish CFC rules can bring income back to Spain.',
      'The owner’s own tax residency is the starting point of the analysis.',
    ],
    body: [
      { p: `The idea is tempting: set up a company in Dubai, invoice through it and pay 9% — or 0% — instead of Spanish rates. The problem is that where a company is registered is only one of the factors that determine where it pays tax. If the person who runs it lives in Spain, the Spanish tax authorities may consider that the company is, in reality, Spanish.` },

      { h2: `When is a company tax resident in Spain?`, id: 'company-residency' },
      { p: `Under the Spanish Corporate Income Tax Law, an entity is resident in Spain if it meets any of these three criteria:` },
      { olist: [`It was incorporated under Spanish law.`, `Its registered office is in Spain.`, `Its place of effective management is in Spain.`] },
      { p: `A Dubai company does not meet the first two. The third is what matters: the place of effective management is where the management and control of the business as a whole actually take place.` },

      { h2: `What “effective management” means in practice`, id: 'effective-management' },
      { p: `The analysis focuses on reality, not on paperwork. Relevant questions include:` },
      {
        list: [
          `Where are the key strategic and commercial decisions made?`,
          `From where are contracts negotiated and signed?`,
          `Who operates the bank accounts, and from where?`,
          `Where do the directors and the team actually work?`,
          `Does the company have real premises, staff and activity in the UAE?`,
        ],
      },
      { p: `If the answer to most of these questions is “from my home in Madrid”, the company is very likely to be managed from Spain — no matter how many documents say otherwise.` },
      { callout: { title: `And the Spain–UAE tax treaty?`, text: `The double taxation treaty between Spain and the UAE resolves cases in which a company could be resident in both countries. As a general rule, the company is deemed resident where its place of effective management is. The treaty does not help if the company is, in fact, managed from Spain.` } },

      { h2: `What happens if the company is managed from Spain`, id: 'consequences' },
      { p: `If the Spanish tax authorities conclude that the company is resident in Spain, it will be taxed on its worldwide profits under Spanish Corporate Income Tax, with the corresponding filing obligations — and possible surcharges, late-payment interest and penalties for the years that were not declared.` },

      { h2: `Two other ways income comes back to Spain`, id: 'other-risks' },
      { h3: `Permanent establishment` },
      { p: `Even if the company is genuinely resident in the UAE, it may have a permanent establishment in Spain if it carries out its business through a fixed place in Spain or through someone who habitually concludes contracts on its behalf. The profits attributable to that establishment are taxed in Spain.` },
      { h3: `Controlled foreign company (CFC) rules` },
      { p: `Spain’s international tax transparency rules can attribute to a Spanish resident owner certain income obtained by a controlled foreign company that pays little tax. When the company lacks sufficient material and human resources, the attribution can extend to all of its income.` },

      { h2: `Your own residency comes first`, id: 'owner-residency' },
      { p: `None of this can be analysed without looking at the owner. If you are tax resident in Spain, the salary and dividends you receive from the Dubai company are taxed in Spain, and the company’s management is likely to be in Spain too. That is why the first step is always to analyse your personal [change of tax residency](/services/tax-residency-change) before deciding on the company.` },

      { h2: `When a Dubai company does make sense`, id: 'when-it-works' },
      { p: `A Dubai company works when it has real substance and is actually managed from the UAE — typically because its owner has moved there and the business operates from there. In that scenario, the UAE tax system can be applied correctly. If you are designing this step, our [international tax structuring](/services/international-tax-structuring) analysis compares the options with real numbers.` },
    ],
    faq: [
      { q: 'Can I live in Spain and have a company in Dubai?', a: 'You can, but if you manage it from Spain, the company is likely to be considered tax resident in Spain and taxed there.' },
      { q: 'What is the place of effective management?', a: 'The place where the management and control of the company as a whole actually take place, analysed on the basis of facts rather than documents.' },
      { q: 'Does the Spain–UAE treaty protect my Dubai company?', a: 'Only if the company is genuinely managed from the UAE. If it is managed from Spain, the treaty generally points to Spain.' },
      { q: 'What if I move to Dubai?', a: 'Then the analysis changes, but you need to be able to prove that your personal tax residency has really moved and that the company is managed from the UAE.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  freeZone: {
    metaTitle: 'Free Zone vs Mainland in Dubai: Which Company Should You Choose?',
    title: 'Free zone or mainland in Dubai: which company should you set up?',
    excerpt:
      'Free zone and mainland companies differ in where they can trade, what they cost, how many visas they allow and how Corporate Tax applies. Here is how to choose the right option for a digital or international business.',
    tags: ['Dubai', 'Free zones', 'Mainland', 'Company setup', 'Corporate Tax'],
    takeaways: [
      'Both allow 100% foreign ownership for most activities.',
      'Free zone companies are usually faster and cheaper to set up and suit businesses with international clients.',
      'Mainland companies can trade freely across the UAE, including with local consumers and government entities.',
      'Both are subject to Corporate Tax; only free zone companies can access the 0% rate on qualifying income.',
    ],
    body: [
      { p: `One of the first decisions when setting up in Dubai is choosing between a free zone company and a mainland company. Both are valid, both allow 100% foreign ownership for most activities, and both can give you access to a residence visa. The difference lies in where you can operate, how much it costs and how it is taxed.` },

      { h2: `What a free zone company is`, id: 'free-zone' },
      { p: `Free zones are special economic areas with their own authority, licensing rules and packages. There are dozens in the UAE, from general-purpose zones to others focused on specific sectors.` },
      { p: `Free zone companies are designed to operate internationally and within their free zone. Selling directly to the UAE local market is more limited: depending on the activity, it may require a local distributor, a mainland branch or a specific permit.` },

      { h2: `What a mainland company is`, id: 'mainland' },
      { p: `A mainland company is licensed by the economic department of the emirate — in Dubai, the Department of Economy and Tourism. It can trade anywhere in the UAE, including with local consumers and government entities. Since 2021, most commercial activities no longer require a local shareholder.` },

      { h2: `Free zone vs mainland at a glance`, id: 'comparison' },
      {
        table: {
          head: ['', 'Free zone', 'Mainland'],
          rows: [
            ['Foreign ownership', '100%', '100% for most activities'],
            ['Where you can trade', 'Internationally and within the free zone; onshore with limits', 'Anywhere in the UAE'],
            ['Office', 'Flexi-desk and shared office packages are common', 'A physical office lease is usually required'],
            ['Setup', 'Usually faster and simpler', 'Usually more steps'],
            ['Corporate Tax', '9%, with a possible 0% on qualifying income', '0% up to AED 375,000 and 9% above'],
          ],
        },
      },

      { h2: `How Corporate Tax applies to each`, id: 'corporate-tax' },
      { p: `Both types of company are subject to UAE Corporate Tax: 0% on taxable income up to AED 375,000 and 9% above that.` },
      { p: `The difference is that free zone companies can apply a 0% rate on their qualifying income if they meet the requirements to be a Qualifying Free Zone Person — including real substance and keeping non-qualifying revenue below 5% of total revenue or AED 5 million. Income from transactions with consumers in the UAE mainland is generally non-qualifying. We explain the whole framework in our guide to the [UAE tax system](/blog/uae-tax-system-guide).` },

      { h2: `Which one suits a digital business?`, id: 'which-one' },
      {
        list: [
          [`Choose a free zone if`, `your clients are mainly outside the UAE, you sell online internationally or you want a fast, cost-efficient setup.`],
          [`Choose mainland if`, `you plan to sell directly to consumers or businesses in the UAE, work with government entities or need a physical presence in the local market.`],
        ],
      },
      { p: `Almost any free zone can work for a digital business: the right one depends on the licensed activities you need, the number of visas and your budget.` },

      { h2: `Before you decide`, id: 'before-deciding' },
      { p: `The choice between free zone and mainland is not only a legal one: it affects your taxes, your visa and how you will operate for years. And remember that setting up a company in Dubai does not, by itself, change your personal tax residency. If you want the setup handled end to end, see our [company setup in Dubai](/services/dubai-company-setup) service.` },
    ],
    faq: [
      { q: 'Can a free zone company work with clients in Dubai?', a: 'It can work freely with other free zone companies and with international clients. Selling directly to the UAE mainland market is more limited and may require additional permits or structures.' },
      { q: 'Is a free zone company tax-free?', a: 'No. It is subject to Corporate Tax, but it can apply 0% on qualifying income if it meets the requirements.' },
      { q: 'Do I need a local partner for a mainland company?', a: 'Not for most commercial activities since 2021, although some regulated activities still have specific requirements.' },
      { q: 'How long does it take to set up a free zone company?', a: 'Incorporation usually takes around 14 days once the documentation is ready; the residence visa and bank account come afterwards.' },
    ],
  },
};
