import { GameResult, Player, Throw, Outcome } from './game';
import { Observable, of } from 'rxjs';
import { GameGateway, PlayPracticeGameRequest, PlayPracticeGameResponse, PlayGameRequest } from './game.gateway';

export class StubGameGateway implements GameGateway {

  playPracticeGameCalledWith: PlayPracticeGameRequest;

  playPracticeGame(request: PlayPracticeGameRequest): Observable<PlayPracticeGameResponse> {
    this.playPracticeGameCalledWith = request;

    return of(new PlayPracticeGameResponse(Outcome.P1Wins));
  }

  playGame(request: PlayGameRequest): Observable<GameResult> {
    const p1: Player = new Player('Jane Doe', 'A001');
    const p2: Player = new Player('John Doe', 'A002');
    return of(new GameResult(p1, p2, Throw.Rock, Throw.Scissors, Outcome.P1Wins));
  }
}