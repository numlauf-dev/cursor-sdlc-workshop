const Slide13Section2Step2 = () => (
  <>
    <div className="section-header">
      <span className="section-badge section2">Section 2</span>
      <span className="phase-badge">Step 2: Plan • 10 min</span>
    </div>
    <h2>Plan Your Improvements</h2>
    <div className="scrollable">
      <div className="checklist">
        {/* Git START */}
        <div className="check-group git">
          <div className="check-group-label">Git: Start</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Tell Cursor to create a planning branch</strong>
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Create a branch called [team]/planning"
              </code>
            </div>
          </div>
        </div>

        {/* IN CURSOR */}
        <div className="check-group work section2">
          <div className="check-group-label">In Cursor</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Create a Skill</strong> — teach Cursor how to generate
                improvement plans for your team
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Create a Cursor Skill that generates feature
                <br />
                improvement plans for existing codebases.
                <br />
                It should suggest 5 parallel features, assign each
                <br />
                to a team member, and output a structured plan."
              </code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Write your PRD to Notion</strong> — use the{' '}
                <span className="highlight">Notion MCP</span> to create your
                plan as a real Notion doc your teammates can find
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Use the Notion MCP to create a page titled
                <br />
                <strong>'[SDLC Workshop] Team [X] — Improvements PRD'</strong>.
                <br />
                Include 5 features we can build in parallel.
                <br />
                For each feature, add a clear heading with the
                <br />
                assignee's GitHub username, a description of what
                <br />
                to build, and which files to touch."
              </code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Create GitHub issues</strong> — one per feature, assigned
                by GitHub username
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Create a GitHub issue for each feature in our
                <br />
                Notion PRD. Assign each to the right team member's
                <br />
                GitHub username. Link back to the Notion page."
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
                <strong>Commit and push the planning doc</strong>
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Commit with message '[Team] - Feature plan',
                <br />
                push and open a PR"
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Slide13Section2Step2
