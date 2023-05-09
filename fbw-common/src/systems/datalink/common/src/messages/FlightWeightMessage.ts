import { AtsuMessage, AtsuMessageSerializationFormat, AtsuMessageType } from './AtsuMessage';

export class FlightWeightsMessage extends AtsuMessage {
    public CockpitCrewCount: number = 0;

    public FlightAttendantCount: number = 0;

    public PaxCount: number = 0;

    public PaxWeight: number = 0;

    public BagCount: number = 0;

    public BagWeight: number = 0;

    public Cargo: number = 0;

    public Payload: number = 0;

    public EstimatedZeroFuelWeight: number = 0;

    constructor() {
        super();
        this.Type = AtsuMessageType.OperationsWeights;
        this.Station = 'AOC';
    }

    public serialize(_format: AtsuMessageSerializationFormat): string {
        return '';
    }
}