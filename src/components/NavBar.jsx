import React from "react";
import HamburgerSVG from "./svgs/Hamburger";
import GitHubSVG from "./svgs/GitHubSVG";
import PlusSVG from "./svgs/PlusSVG";
import DropArrowSVG from "./svgs/DropArrowSVG";
import IssueStateSVG from "./svgs/IssueStateSVG";
import PullSVG from "./svgs/PullSVG";
import NotificationSVG from "./svgs/NotificationSVG";
import ActionSVG from "./svgs/ActionSVG";
import CodeSVG from "./svgs/CodeSVG";
import DiscussionSVG from "./svgs/DiscussionSVG";
import InsightSVG from "./svgs/InsightSVG";
import ProjectSVG from "./svgs/ProjectSVG";
import SecuritySVG from "./svgs/SecuritySVG";
import WikiSVG from "./svgs/WikiSVG";
import styles from "./NavBar.module.css";

export default function NavBar() {
	return (
		<div class={styles.navBar}>
			<div class={styles.header}>
				<div>
					<button>
						<HamburgerSVG />
					</button>
					<GitHubSVG />
					<p class={styles.breadcrumb}>
						<span>chakra-ui</span> / <span>chakra-ui</span>
					</p>
				</div>
				<div>
					<input type="search" placeholder="Type / to search" />
					<button>
						<PlusSVG />
						<DropArrowSVG />
					</button>
					<button>
						<IssueStateSVG fill="#8b949e" />
					</button>
					<button>
						<PullSVG fill="#8b949e" />
					</button>
					<button>
						<NotificationSVG />
					</button>
					<p class={styles.avatar}>
						<img src="avatar.png" alt="avatar" />
					</p>
				</div>
			</div>
			<div class={styles.navigation}>
				<p>
					<CodeSVG /> Code
				</p>
				<p>
					<IssueStateSVG fill="#8b949e" /> Issues <span>100</span>
				</p>
				<p>
					<PullSVG fill="#8b949e" /> Pull requets <span>30</span>
				</p>
				<p>
					<DiscussionSVG /> Discussions
				</p>
				<p>
					<ActionSVG /> Actions
				</p>
				<p>
					<ProjectSVG /> Projects <span>1</span>
				</p>
				<p>
					<WikiSVG /> Wiki
				</p>
				<p>
					<SecuritySVG /> Security
				</p>
				<p>
					<InsightSVG /> Insights
				</p>
			</div>
		</div>
	);
}
