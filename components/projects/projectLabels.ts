import { Project } from '@/types';

export function formatStatus(status: Project['status']) {
  return status.charAt(0) + status.slice(1).toLowerCase();
}

/** Never present a profile link as if it were the project's repository. */
export function githubLinkLabel(project: Project) {
  return project.githubLinkType === 'profile' ? 'GitHub Profile' : 'View Repository';
}
