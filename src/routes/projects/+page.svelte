<script lang="ts">
    import { Github, GithubIcon } from "lucide-svelte";

    type ProjectStatus = "Active" | "DelayedOrDoneish" | "Dead";
    // @ts-ignore
    let projects: Array<{
        name: string;
        description: string;
        github: string;
        status: ProjectStatus;
    }> = [
        {
            name: "ecorous.org",
            description: "the very site you're on right now",
            github: "Ecorous/ecorous.org",
            status: "Active",
        },
        {
            name: "PolyHopper",
            description: "a discord link mod for quilt",
            github: "PolyHopper/PolyHopper",
            status: "Active",
        },
        {
            name: "java-executipn",
            description: "(warning: security risk) Allows you to execute java code via a minecraft command (dev environment only)",
            github: "Ecorous/java-execution",
            status: "Active"
        },
        {
            name: "tokengen-rs",
            description: "A token/key/password generator written in Rust. Has 2 interfaces: CLI, and Web",
            github: "Ecorous/tokengen-rs",
            status: "DelayedOrDoneish"
        },
        {
            name: "sticks-debugged",
            description: "A mod for Minecraft that adds a debug stick that can be used in survival mode",
            github: "Ecorous/sticks-debugged",
            status: "DelayedOrDoneish"
        },
        {
            name: "packwirs",
            description: "An incomplete packwiz port written in Rust",
            github: "Ecorous/packwirs",
            status: "Dead"
        },
        {
            name: "FruitsAndForests",
            description: "A Minecraft mod that adds new biomes & trees (incomplete)",
            github: "Ecorous/FruitsAndForests",
            status: "DelayedOrDoneish"
        },
        {
            name: "grub-utils",
            description: "A utility for managing grub",
            github: "Ecorous/grub-utils",
            status: "Dead"
        },
        {
            name: "storage-recursion",
            description: "A mod for Minecraft that lets you store shulker boxes in shulker boxes",
            github: "Ecorous/storage-recursion",
            status: "DelayedOrDoneish"
        },
        {
            name: "modrinth-embedder",
            description: "A web api that lets you embed modrinth links on your website (very broken)",
            github: "Ecorous/modrinth-embedder",
            status: "Dead"
        },
        {
            name: "packwiz-nigui",
            description: "A GUI for packwiz (incomplete)",
            github: "Ecorous/packwiz-nigui",
            status: "Dead"
        }
        // Add more projects with status as needed
    ].sort((a, b) => {
        // sort by status
        let statusOrder: Record<ProjectStatus, number> = {
            Active: 0,
            DelayedOrDoneish: 1,
            Dead: 2,
        };
        return statusOrder[a.status as ProjectStatus] - statusOrder[b.status as ProjectStatus]; // these will always be ProjectStatuses
    })
</script>

<div class="project-grid">
    {#each projects as p}
        <div class="project-block" data-status={p.status}>
            <h2 class="project-title">{p.name}</h2>
            <p class="project-description">{p.description}</p>
            <a
                href={`https://github.com/${p.github}`}
                target="_blank"
                class="project-link">
                <Github size={24} />
                <span class="icon-text">GitHub Repo</span>
            </a>
            {#if p.status === "DelayedOrDoneish"}
            <p class="project-status">Status: Delayed/Done?</p>
            {:else}
            <p class="project-status">Status: {p.status}</p>
            {/if}
        </div>
    {/each}
</div>

<style lang="scss">
    @import "$lib/style.scss";

    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    }

    .project-block {
        border: 2px solid $base;
        border-radius: 10px;
        padding: 20px;
        background-color: $accent0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

        .project-title {
            color: $text;
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        .project-description {
            color: $text;
            margin-bottom: 15px;
        }

        .project-link {
            display: flex;
            align-items: center;
            color: $text;
            text-decoration: none;
            font-weight: bold;
            margin-bottom: 10px;

            .icon-text {
                margin-left: 8px;
            }

            svg {
                margin-right: 8px;
            }
        }

        .project-status {
            font-weight: bold;
            margin-top: 10px;
        }

        &[data-status="Active"] {
            .project-status {
                color: #a6e3a1; // Active
            }
        }

        &[data-status="DelayedOrDoneish"] {
            .project-status {
                color: #f9e2af; // DelayedOrDoneish
            }
        }

        &[data-status="Dead"] {
            .project-status {
                color: #f38ba8; // Dead
            }
        }
    }
</style>
