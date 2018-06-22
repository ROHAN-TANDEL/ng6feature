import { LazyloadModule } from './lazyload.module';

describe('LazyloadModule', () => {
  let lazyloadModule: LazyloadModule;

  beforeEach(() => {
    lazyloadModule = new LazyloadModule();
  });

  it('should create an instance', () => {
    expect(lazyloadModule).toBeTruthy();
  });
});
