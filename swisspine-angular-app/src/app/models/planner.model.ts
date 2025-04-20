import { ExternalSystem } from './external-system.model';
import { Fund } from './fund.model';
import { NamedItem } from './id-name.model';
import { Report } from './report.model';

export interface Planner {
  id?: string;
  name: string;
  description: string;
  plannerType: 'Scheduled' | 'On-Demand';

  externalSystem: ExternalSystem;

  funds: Fund[];

  triggers: string[] | null;

  sources: NamedItem [];
  runs: NamedItem[];
  reports: Report[];

  owner: string;
}
