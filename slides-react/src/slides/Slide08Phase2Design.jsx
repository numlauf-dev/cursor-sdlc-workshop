const Slide08Phase2Design = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Phase 2: Design • 10 min</span>
    </div>
    <h2>Design</h2>
    <div className="scrollable">
      <div className="checklist">
        {/* Git START */}
        <div className="check-group git">
          <div className="check-group-label">Git: Start</div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Wait for PR approval</strong> — your Phase 1 changes need
              to be reviewed first
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Tell Cursor to sync and create a branch</strong>
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Sync my fork with the upstream repo, pull the
                <br />
                latest changes, and create a branch called
                <br />
                [team]/base-mvp"
              </code>
            </div>
          </div>
        </div>

{/* IN CURSOR */}
          <div className="check-group work section1">
            <div className="check-group-label">In Cursor</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>ONE PERSON:</strong> Create the base MVP application from{' '}
                <span className="highlight">prd.md</span> using Cursor
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Read the prd.md in our team folder and build the
                <br />
                base MVP. Keep it minimal — leave features for
                <br />
                teammates to add. Put the code in base_mvp/."
              </code>
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Run locally</strong> — Ask Cursor:{' '}
              <em>"How do I run this project?"</em>
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Verify it works</strong> — make sure the base MVP runs before moving on
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Create GitHub issues</strong> — one issue per team member,{' '}
                assigned by <span className="highlight">GitHub username</span>
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Read our prd.md and create a GitHub issue for
                <br />
                each feature task. Assign each issue to the
                <br />
                team member's GitHub username from the PRD."
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
                {' '}— this becomes the foundation for everyone
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Commit all my changes with the message
                <br />
                '[Team] - Base MVP scaffold',
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

export default Slide08Phase2Design
