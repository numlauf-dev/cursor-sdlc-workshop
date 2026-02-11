# LinkedOut — Section 3: Design-to-Code

5 teams compete to transform an ugly LinkedIn clone into something beautiful — starting from a real Figma design file.

## What You'll Learn

This section mirrors the **real-world SDLC** for frontend development:

1. **Designers create mockups in Figma** with annotations for what each section should do
2. **Developers pull those designs into Cursor** using the Figma MCP
3. **AI breaks the design into tasks** — a PRD with parallelizable sub-projects
4. **Each team member claims a task** and implements it as a separate PR

This is exactly how design-to-code workflows operate at modern companies. Designers mock up the UI, annotate it, and hand it off. The difference is that now **AI can read the Figma file directly** and generate the code for you.

## Team Folders

| Team | Folder | Port | URL |
|------|--------|------|-----|
| Team 1 | `team_1/` | 3001 | http://localhost:3001 |
| Team 2 | `team_2/` | 3002 | http://localhost:3002 |
| Team 3 | `team_3/` | 3003 | http://localhost:3003 |
| Team 4 | `team_4/` | 3004 | http://localhost:3004 |
| Team 5 | `team_5/` | 3005 | http://localhost:3005 |

---

## Getting Started

### Step 1: Add the Figma MCP to Cursor

Before anything else, connect Cursor to the Figma design file.

1. Open **Cursor Settings** > **MCP**
2. Add the **Figma MCP** if it's not already listed
   - If using the Desktop MCP server: follow [Figma's local setup guide](https://www.figma.com/community/plugin/1469530206495735048)
   - If using the Remote MCP server: follow [Figma's remote setup guide](https://www.figma.com/community/plugin/1469530206495735048)
3. Verify it's working by asking Cursor:

> **Ask Cursor:** "Use the Figma MCP `get_metadata` tool on this file: `https://www.figma.com/design/jXTg8QTUoESBYL5x0KHZvD/LinkedOut-Design?node-id=0-1`"

You should see a list of frames (News section, Post section, Games section, Feed, etc.) — that means it's connected!

### Step 2: Join your team

Add yourself to your team's `members/` folder. You already know how to do this from Section 1!

> **Ask Cursor:** "Add me to this team. My name is [name] and my GitHub username is [username]."

Or copy your member file from the `teams/` section if you already made one there.

### Step 3: Explore the Figma design

The design file breaks down every part of the LinkedOut UI into separate annotated frames:

**Figma Design File:** [LinkedOut Design](https://www.figma.com/design/jXTg8QTUoESBYL5x0KHZvD/LinkedOut-Design?node-id=0-1)

Ask Cursor to read the full design breakdown:

> **Ask Cursor:** "Use the Figma MCP to `get_metadata` on the LinkedOut Design file (fileKey: `jXTg8QTUoESBYL5x0KHZvD`, nodeId: `0-1`). List every frame and sub-frame with its annotations. Then break these into a task list where each task can be done by one person as a single PR."

The Figma file has frames like:
- **Full page** — the overall screenshot showing what we're building toward
- **News section** — links to fake articles, "show more" functionality
- **Post section** — photo/video upload, post button that adds to feed
- **Games section** — individual games (Zip, Queens, Sudoku) as sub-frames
- **Feed** — like/comment interactions, emoji reactions

Each frame contains **text annotations** from the designer describing what that section should do.

### Step 4: Generate a PRD

Have Cursor turn the Figma breakdown into a project plan. You can publish it to **Notion**, create **GitHub Issues**, or both:

**Option A: Write to Notion**
> **Ask Cursor:** "Based on the Figma design breakdown, use the Notion MCP to create a page titled **'[SDLC Workshop] Team [X] — LinkedOut PRD'**. Each Figma frame (and sub-frame) should be a separate task. For each task, add a heading with the assignee's GitHub username, a description of what to build, and which components/files to touch. Make sure the tasks are small enough that each person can do one as a PR under 500 lines. We have [X] people on our team."

**Option B: Create GitHub Issues**
> **Ask Cursor:** "Based on the Figma design breakdown, create a GitHub Issue for each task. Each Figma frame (and sub-frame) should be its own issue, assigned to a team member by GitHub username. Label them `section-3` and `team-X`. Make sure each task is small enough for a PR under 500 lines."

**Either way, also save a local copy:**
> **Ask Cursor:** "Also save this PRD as `prd.md` in our team folder."

Now your team has a shared plan everyone can reference (in Notion, GitHub, or both), plus a local copy in the repo.

### Step 5: Run the app

Each team works **only in their own folder**:

```bash
cd linkedout/team_X
npm install
npm run dev
```

Your app will be running at the URL listed above.

### Step 6: Pick a task and build!

Each team member should:
1. Pick an unclaimed task from the PRD
2. Create a branch for it
3. Use the Figma MCP to pull design details for their specific section:

> **Ask Cursor:** "Use the Figma MCP `get_design_context` on the [frame name] frame from the LinkedOut Design file. Then implement it in our codebase."

4. Open a PR when done

---

## What You're Working With

LinkedOut is a deliberately ugly LinkedIn clone. It has:
- A navigation bar with links
- A feed full of posts (some very funny)
- A profile sidebar
- News, jobs, games, messaging, and more

**The catch:** It looks like it was built in 1998. Tables for layout, no styling, placeholder images. Your job is to make it look and feel like a real app — guided by the Figma design.

## The Rules

1. **Stay in your team's folder** — don't touch other teams' code
2. **No PR over 500 lines** (auto-rejected)
3. **Everyone must contribute at least 1 merged PR**
4. **Coordinate with your team** — use the PRD to divide work so you don't step on each other

## File Structure

Each team folder is a complete React app:

```
team_X/
├── members/                # Add your member file here first!
│   └── README.md
├── prd.md                  # Your team's PRD (generated from Figma)
├── index.html              # Vite entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Dev server config (port)
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main layout
│   ├── App.css             # Styles (intentionally minimal)
│   ├── components/
│   │   ├── Navbar.jsx      # Top navigation
│   │   ├── LeftSidebar.jsx # Profile & groups
│   │   ├── Feed.jsx        # Post feed
│   │   ├── Post.jsx        # Individual post
│   │   └── RightSidebar.jsx# News, jobs, games, messages
│   └── data/
│       └── mockData.js     # All the fake data
```

## Tips

- **Start with the Figma MCP** — let AI read the design and generate your task list
- **Each person should own a frame** — one person does News, another does Games > Zip, etc.
- **Use `get_design_context`** on individual frames for the best code generation results
- **Don't rewrite everything** — improve one section at a time, one PR at a time
- **This is how it works in industry** — designers hand off Figma files, developers implement them. AI just makes it faster.

## Key Takeaway

In the modern SDLC, designers can create mockups and annotations in Figma, then developers (or AI) can pull that design context directly into their editor and generate working code. This section demonstrates that **Figma + MCP + Cursor** closes the gap between design and implementation — what used to take days of back-and-forth can now happen in minutes.
