
@Injectable()
export class ContainerService {
  path: String = '/containers'

  constructor(private apiService: ApiService) {
  }

  get(): Obserbvable<any[]> {
    return this.ApiService.get(this.path)
  }
}
