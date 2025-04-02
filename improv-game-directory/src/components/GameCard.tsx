import "./GameCard.css"

//what is interface
interface GameCardProps {
    title: string;
    description: string;
    numberOfPlayers: {
        min: number;
        max: number;
    };
}

//What is React.FC?
export const GameCard: React.FC<GameCardProps> = ({ title, description, numberOfPlayers }) => {
    return (
        <div className="game-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Players: {numberOfPlayers.min} - {numberOfPlayers.max}</p>
        </div>
    )
}