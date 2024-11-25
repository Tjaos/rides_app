import { HttpService } from "@nestjs/axios";
import { Injectable} from "@nestjs/common/";

@Injectable()
export class GoogleMapsService {
  constructor(private readonly httpService: HttpService) {}

  async getRoute(origin: string, destination: string) {
    const apiKey = process.env.GOOGLE_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;

    const response = await this.httpService.get(url).toPromise();
    if (response.status !== 200) {
      throw new Error('Failed to fetch route');
    }

    const data = response.data.routes[0].legs[0];
    return {
      distance: data.distance.value / 1000,
      duration: data.duration.text,
      start_location: data.start_location,
      end_location: data.end_location,
    };
  }
}