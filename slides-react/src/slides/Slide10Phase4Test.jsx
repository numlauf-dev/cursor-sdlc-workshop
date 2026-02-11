const Slide10Phase4Test = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Phase 4: Test • 5 min</span>
    </div>
    <h2>Test</h2>
    <div className="checklist">
      {/* Git SYNC */}
      <div className="check-group git">
        <div className="check-group-label">Git: Sync</div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Merge all approved PRs</strong> — combine everyone's
            sandboxes into the official project
          </div>
        </div>
        <div className="check-item has-code">
          <div className="check-header">
            <div className="check-box"></div>
            <div>
              <strong>Tell Cursor to sync and pull everything</strong>
            </div>
          </div>
          <div className="code-block">
            <code>
              <span className="comment">Ask Cursor:</span>
              <br />
              "Sync my fork with upstream, switch to main,
              <br />
              and pull all the latest changes"
            </code>
          </div>
        </div>
      </div>

{/* IN CURSOR */}
        <div className="check-group work section1">
          <div className="check-group-label">In Cursor</div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Run the full application</strong>
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Test ALL features together</strong> — does everything
            integrate?
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Fix integration issues</strong> — use Cursor to help debug
          </div>
        </div>
      </div>
    </div>
    <div className="emphasis-box green">
      <strong>Section 1 Complete</strong> — You just experienced Plan → Design →
      Develop → Test.
    </div>
  </>
)

export default Slide10Phase4Test
