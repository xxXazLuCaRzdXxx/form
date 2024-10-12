import { Player, IPlayer } from './models/Player';

// Define an interface for the input type
interface PlayerInput {
  username: string;
  email: string;
  phone: string;
  team?: string;
  level: number;
  experience?: string;
}

export const resolvers = {
  Query: {
    players: (): Promise<IPlayer[]> => Player.find(),
  },
  Mutation: {
    registerPlayer: async (_: any, { input }: { input: PlayerInput }): Promise<IPlayer> => {
      const player = new Player(input);
      await player.save();
      return player;
    },
  },
};