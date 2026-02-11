const Slide07Phase1Plan = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Phase 1: Plan • 10 min</span>
    </div>
    <h2>Plan</h2>
    <div className="scrollable">
      <div className="checklist">
        {/* Git START */}
        <div className="check-group git">
          <div className="check-group-label">Git: Start</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Tell Cursor to fork &amp; clone the repo</strong> — this
                creates your own copy and downloads it
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Fork this repo [REPO_URL], clone my fork,
                <br />
                and create a branch called [team]/setup"
              </code>
            </div>
          </div>
        </div>

        {/* IN CURSOR */}
        <div className="check-group work section1">
          <div className="check-group-label">Tell Cursor</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Claim your team folder</strong> &amp;{' '}
                <strong>add yourself</strong>
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Add me to team_[X]. Create my member file
                <br />
                in teams/team_[X]/members/[your-name].md.
                <br />
                My role is [AE/FE/ADM] and my GitHub username is [username]"
              </code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Create a PRD</strong> with{' '}
                <span className="highlight">5 specific tasks</span> (one per
                team member, assigned by name)
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Read the prd.md template in our team folder
                <br />
                and help us fill it out. We want to build [idea].
                <br />
                Our team members are [names]."
              </code>
            </div>
          </div>
        </div>

        {/* Git FINISH */}
        <div className="check-group git">
          <div className="check-group-label">Git: Finish</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Tell Cursor to commit, push, and open a PR</strong>
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Commit all my changes with the message
                <br />
                '[Team] - Initial setup and PRD',
                <br />
                push to my fork, and open a PR to the original repo"
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Slide07Phase1Plan
