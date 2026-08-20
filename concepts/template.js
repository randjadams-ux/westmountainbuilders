document.querySelectorAll('[data-phone]').forEach(a=>a.href='tel:2088803797');

document.querySelector('meta[name="description"]').content = 'West Mountain Builders — owner-operated general contracting and handyman services in Nampa, Idaho.';

const topbar = document.querySelector('.topbar');
topbar.innerHTML = `<a href="../index.html">← All concepts</a><a class="brand-lockup" href="../index.html" aria-label="West Mountain Builders concept selector"><span class="brand-mark"><i></i><b>WMB</b></span><span class="brand-words"><strong>West Mountain Builders</strong><small>Nampa, Idaho</small></span></a><nav><a href="#work">Services</a><a href="#process">Process</a><a href="tel:2088803797">208.880.3797</a></nav>`;

const hero = document.querySelector('.hero');
hero.insertAdjacentHTML('afterbegin', `<div class="hero-brand"><span class="brand-mark"><i></i><b>WMB</b></span><span class="hero-brand__words"><strong>West Mountain Builders</strong><span>Owner-operated by Jeremy Heistand · Nampa, Idaho</span></span></div>`);
hero.querySelector('.eyebrow').textContent = 'Nampa, Idaho · General Contractor & Handyman';

const heroCopy = {
  ridgeline: 'Purposeful homes, additions, garages, and repairs. Straightforward communication. Experience that keeps every project moving.',
  blueprint: 'Residential construction and handyman work backed by real project-management experience, broad field knowledge, and a practical plan.',
  highcountry: 'Custom homes. Additions. Garages. Remodels. Handyman work. One experienced, hands-on local contractor ready to take responsibility.',
  clearpath: 'One dependable Nampa builder for custom homes, additions, garages, remodeling, and the things that simply need to be fixed.'
};
for (const [theme, copy] of Object.entries(heroCopy)) if (document.body.classList.contains(theme)) hero.querySelector(':scope > p').textContent = copy;

document.querySelector('.split > div').innerHTML = `<p class="eyebrow">Jeremy Heistand · Owner & Operator</p><h2>Local experience from blueprints to final touches.</h2><p>Jeremy began in construction and spent five to six years managing projects for an experienced builder. After the 2008 downturn, he built a business of his own and developed broad, hands-on experience across construction, landscaping, irrigation, structural work, and property maintenance.<br><br>Today, Jeremy personally manages West Mountain Builders projects throughout Nampa and the surrounding area—from early planning and blueprints through city-approved plans, construction coordination, and the finishing details.</p><a class="button" href="#work">Explore our residential services</a>`;

document.querySelector('.services').innerHTML = `<article class="service"><span>01 / BUILD</span><b>Custom Homes</b><p>Ground-up residential construction guided from early planning and blueprints through the final construction touches.</p></article><article class="service"><span>02 / EXPAND</span><b>Additions & Garages</b><p>Structural additions, garages, and practical new space designed around your home, property, and long-term needs.</p></article><article class="service"><span>03 / IMPROVE</span><b>Home Remodeling</b><p>Thoughtful renovations that improve how a home functions, feels, and serves the people who live there.</p></article><article class="service"><span>04 / REPAIR</span><b>Handyman Services</b><p>Dependable residential repairs and property solutions from a contractor with broad, hands-on building experience.</p></article>`;

document.querySelector('.process').insertAdjacentHTML('beforebegin', `<section class="trust-strip"><div class="trust-item"><b>Owner Operated</b><span>Jeremy is your direct point of contact</span></div><div class="trust-item"><b>Certified & Insured</b><span>Professional local contracting</span></div><div class="trust-item"><b>Plans Through Finish</b><span>One steady hand across the project</span></div><div class="trust-item"><b>Flexible Payment</b><span>Credit cards accepted</span></div></section><section class="project-management"><div><p class="eyebrow">Full-project coordination</p><h2>One point of responsibility.</h2></div><p>Jeremy helps organize the full path from an initial idea to a finished build: planning, blueprints, licensed professionals, city-approved documentation when required, scheduling, construction, and follow-through. You get an experienced local builder who understands both the big picture and the practical details.</p></section>`);

document.querySelector('.contact').innerHTML = `<div><p class="eyebrow">West Mountain Builders · Nampa, Idaho</p><h2>What can Jeremy build—or fix—for you?</h2></div><div><p>Start with a straightforward conversation about your home, addition, garage, remodeling project, or repair list.</p><div class="contact-details"><p><strong>Jeremy Heistand</strong><br>Owner & General Contractor</p><p><strong>Office</strong><br>1835 W Lake Point Ct<br>Nampa, ID 83651</p><p><strong>Hours</strong><br>Monday–Friday<br>8:00 AM–7:00 PM</p><p><strong>Service Area</strong><br>Nampa and surrounding communities</p></div><a class="button" href="tel:2088803797">Call 208.880.3797</a><p><a href="https://www.facebook.com/profile.php?id=61558865745033">See current work on Facebook →</a></p></div>`;

document.querySelector('.concept-footer').innerHTML = `<span>West Mountain Builders · Nampa, Idaho</span><span>Custom Homes · Additions · Remodeling · Handyman</span><a href="../index.html">View all six concepts ↑</a>`;
