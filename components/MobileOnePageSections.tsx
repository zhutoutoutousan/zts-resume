import Link from 'next/link'
import Contact from '@/components/Contact'
import { jobs } from '@/data/experience'

export default function MobileOnePageSections() {
  const previewJobs = jobs.slice(0, 8)

  return (
    <div className="mobile-onepage-sections">
      <section id="about" className="mobile-section">
        <h2 className="mobile-section-title">About</h2>
        <p className="mobile-section-body">
          Versatile engineer across research platforms (RITS), quant tooling
          (WorldQuant), edtech, and global enterprise UX—comfortable from Go and
          React to design systems and stakeholder workshops.
        </p>
      </section>

      <section id="work" className="mobile-section">
        <h2 className="mobile-section-title">Selected work</h2>
        <ul className="mobile-job-list">
          {previewJobs.map((job) => (
            <li key={`${job.company}-${job.period}`} className="mobile-job-card">
              <div className="mobile-job-head">
                <span className="mobile-job-company">{job.company}</span>
                <span className="mobile-job-period">{job.period}</span>
              </div>
              <div className="mobile-job-role">{job.role}</div>
              <p className="mobile-job-summary">{job.highlights[0]}</p>
              <div className="mobile-job-links">
                {job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-text-link"
                  >
                    Link
                  </a>
                )}
                {job.codeLink && (
                  <a
                    href={job.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-text-link"
                  >
                    Code
                  </a>
                )}
                {job.repositoryLinks?.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-text-link"
                  >
                    {r.label}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <p className="mobile-section-footnote">
          Full interactive résumé (tech-stack game) on desktop or via{' '}
          <Link href="/experience" className="mobile-text-link">
            Tech journey
          </Link>
          .
        </p>
      </section>

      <section id="connect" className="mobile-section">
        <h2 className="mobile-section-title">Connect</h2>
        <Contact />
      </section>

      <section id="more" className="mobile-section mobile-section-more">
        <h2 className="mobile-section-title">Explore</h2>
        <nav className="mobile-explore-nav" aria-label="More pages">
          <Link href="/experience" className="mobile-explore-link">
            Tech journey
          </Link>
          <Link href="/projects" className="mobile-explore-link">
            Projects
          </Link>
          <Link href="/blog" className="mobile-explore-link">
            Blog
          </Link>
          <Link href="/skills" className="mobile-explore-link">
            Skills
          </Link>
        </nav>
      </section>
    </div>
  )
}
