"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ormconfig = {
  type: "postgres",
  host: process.env.host,
  port: Number(process.env.port),
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
  synchronize: false,
  logging: ["warn", "error"],
  entities: ["build/entities/**/*.js"],
  migrations: ["build/migrations/**/*.js"],
  subscribers: ["build/subscribers/**/*.js"],
  cli: {
    entitiesDir: "build/entities",
    migrationsDir: "build/migrations",
    subscribersDir: "build/subscribers",
  },
};
exports.default = ormconfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL29ybWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sU0FBUyxHQUFzQjtJQUNuQyxJQUFJLEVBQUUsVUFBVTtJQUNoQixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJO0lBQ3RCLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDOUIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTtJQUM5QixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRO0lBQzlCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7SUFDOUIsV0FBVyxFQUFFLEtBQUs7SUFDbEIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztJQUMxQixRQUFRLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztJQUNsQyxVQUFVLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztJQUN0QyxXQUFXLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxHQUFHLEVBQUU7UUFDSCxXQUFXLEVBQUUsY0FBYztRQUMzQixhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLGNBQWMsRUFBRSxpQkFBaUI7S0FDbEM7Q0FDRixDQUFDO0FBRUYsa0JBQWUsU0FBUyxDQUFDIn0=
