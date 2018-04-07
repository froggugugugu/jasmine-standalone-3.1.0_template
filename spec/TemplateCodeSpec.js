/**
 * <テストの説明（各テストのグルーピング単位）>
 */
describe("TemplateCode", function() {

  /**
   * テスト対象
   */
  var testInstance;

  /**
   * 事前処理
   */
  beforeEach(function() {
    console.log('beforeEach called');
    testInstance = new TargetClass();
  });

  /**
   * 事後処理
   */
  afterEach(function() {
    console.log('afterEach called');
  });

  /**
   * 検証
   */
  it("testname", function() {

    // 一致
    expect(testInstance.getStringVal()).toBe("expected");
    expect(testInstance.getIntVal()).toBe(9876543210);
    expect(testInstance.getObjVal()).toEqual({"foo": ['bar', 'baz']});
    // 含まれているか
    expect(testInstance.getArrayVal()).toContain(20);
    expect(testInstance.getStringVal()).toContain("pect");
    // 正規表現
    expect(testInstance.getStringVal()).toMatch(/pected$/);
    expect(testInstance.getStringVal()).toMatch("pect");
    // undefined検証
    expect(testInstance.getDefinedVal()).toBeDefined();
    // 等号・不等号・符号付き不等号
    expect(testInstance.getGtVal()).toBeGreaterThan(3);
    expect(testInstance.getGtEqVal()).toBeGreaterThanOrEqual(25);
    expect(testInstance.getLtVal()).toBeLessThan(0);
    expect(testInstance.getLtEqVal()).toBeLessThanOrEqual(123);

  });

  /**
   * describeは入れ子OK
   */
  //  describe("TemplateCode", function() {
  //    var player;
  //    beforeEach(function() {
  //      player = new Player();
  //      song = new Song();
  //    });
  //    it("testname", function() {
  //
  //      expect(player.currentlyPlayingSong).toEqual(song);
  //      expect(player).toBePlaying(song);
  //    });
  //  });

});
